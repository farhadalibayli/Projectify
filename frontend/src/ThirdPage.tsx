// frontend/src/ThirdPage.tsx
import React, { useState } from "react";
import styles from "./ThirdPage.module.css";

interface ThirdPageProps {
  projectType: string;
  categories: string[];
  onBack?: () => void;
}

const ThirdPage: React.FC<ThirdPageProps> = ({ projectType, categories, onBack }) => {
  const [idea, setIdea] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Trigger API fetch manually on render
  const fetchIdea = async () => {
    if (idea || loading) return; // prevent double fetch
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:5000/api/generate-idea", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectType, categories }),
      });

      const data = await response.json();
      if (response.ok) {
        setIdea(data.idea);
      } else {
        setError(data.error || "Failed to generate idea");
      }
    } catch (err) {
      setError("Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  // Call fetchIdea immediately when component renders
  if (!idea && !loading && !error) fetchIdea();

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>✨ Your Smart Project Idea</h1>
        <p className={styles.subtitle}>Based on your selected categories</p>
      </header>

      <main className={styles.resultSection}>
        {loading && <p>Generating your idea...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && idea && (
          <div className={styles.ideaCard}>
            <h2 className={styles.ideaTitle}>{idea}</h2>
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        {onBack && (
          <button className={styles.backBtn} onClick={onBack}>
            ← Back
          </button>
        )}
      </footer>
    </div>
  );
};

export default ThirdPage;
