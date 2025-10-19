import React, { useState } from "react";
import styles from "./SecondPage.module.css";
import ThirdPage from "./ThirdPage";

interface SecondPageProps {
  projectType: string;
  onBack?: () => void;
}

const categories = [
  { name: "Music", emoji: "🎵" },
  { name: "Education", emoji: "📚" },
  { name: "Game", emoji: "🎮" },
  { name: "Sport", emoji: "⚽" },
  { name: "Art", emoji: "🎨" },
  { name: "Tech", emoji: "💻" },
  { name: "Travel", emoji: "✈️" },
  { name: "Food", emoji: "🍔" },
  { name: "Health", emoji: "💊" },
];

const SecondPage: React.FC<SecondPageProps> = ({ projectType, onBack }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showThirdPage, setShowThirdPage] = useState(false);

  // Toggle category selection (max 3)
  const toggleCategory = (name: string) => {
    if (selectedCategories.includes(name)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== name));
    } else if (selectedCategories.length < 3) {
      setSelectedCategories([...selectedCategories, name]);
    }
  };

  const firstRow = categories.slice(0, 4);
  const secondRow = categories.slice(4);

  const handleGenerateIdea = () => {
    if (selectedCategories.length > 0) setShowThirdPage(true);
  };

  // ✅ Show ThirdPage when Generate Idea is clicked
  if (showThirdPage) {
    return (
      <ThirdPage
        projectType={projectType}
        categories={selectedCategories}
        onBack={() => setShowThirdPage(false)}
      />
    );
  }

  return (
    <div className={styles.pageContainer}>
      <header className={styles.hero}>
        <h1 className={styles.title}>Choose Your Categories</h1>
        <p className={styles.subtitle}>Select 1 to 3 categories ⚡</p>
      </header>

      <div className={styles.categoriesContainer}>
        <div className={styles.row}>
          {firstRow.map((cat) => (
            <div
              key={cat.name}
              className={`${styles.categoryItem} ${
                selectedCategories.includes(cat.name) ? styles.selected : ""
              }`}
              onClick={() => toggleCategory(cat.name)}
            >
              <span className={styles.emoji}>{cat.emoji}</span>
              <span className={styles.categoryName}>{cat.name}</span>
            </div>
          ))}
        </div>

        <div className={styles.row}>
          {secondRow.map((cat) => (
            <div
              key={cat.name}
              className={`${styles.categoryItem} ${
                selectedCategories.includes(cat.name) ? styles.selected : ""
              }`}
              onClick={() => toggleCategory(cat.name)}
            >
              <span className={styles.emoji}>{cat.emoji}</span>
              <span className={styles.categoryName}>{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      <footer className={styles.footer}>
        {onBack && (
          <button className={styles.backBtn} onClick={onBack}>
            ← Back
          </button>
        )}
        <button
          className={`${styles.nextBtn} ${
            selectedCategories.length > 0 ? styles.active : styles.inactive
          }`}
          disabled={selectedCategories.length === 0}
          onClick={handleGenerateIdea}
        >
          Generate Idea →
        </button>
      </footer>
    </div>
  );
};

export default SecondPage;
