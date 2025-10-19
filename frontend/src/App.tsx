import React, { useState } from "react";
import "./styles.css";
import SecondPage from "./SecondPage";

interface ProjectType {
  id: string;
  name: string;
  icon: string;
  description: string;
}

const PROJECT_TYPES: ProjectType[] = [
  {
    id: "website",
    name: "Website",
    icon: "💻",
    description: "Design modern, responsive websites.",
  },
  {
    id: "mobile",
    name: "Mobile App",
    icon: "📱",
    description: "Build sleek and functional mobile applications.",
  },
];

const App: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [page, setPage] = useState<"first" | "second">("first");

  // Navigate to SecondPage, pass selected project type
  if (page === "second" && selected) {
    return <SecondPage projectType={selected} onBack={() => setPage("first")} />;
  }

  return (
    <div className="app-container">
      <header className="hero">
        <h1 className="title">Projectify</h1>
        <p className="subtitle">Generate smart & creative tech ideas ⚡</p>
      </header>

      <div className="options-container">
        {PROJECT_TYPES.map((type) => (
          <div
            key={type.id}
            className={`option-card ${selected === type.id ? "selected" : ""}`}
            onClick={() => setSelected(type.id)}
          >
            <div className="icon-wrapper">{type.icon}</div>
            <h2>{type.name}</h2>
            <p>{type.description}</p>
          </div>
        ))}
      </div>

      <footer className="footer">
        <button
          className={`next-btn ${selected ? "active" : "inactive"}`}
          disabled={!selected}
          onClick={() => selected && setPage("second")}
        >
          Next →
        </button>
      </footer>
    </div>
  );
};

export default App;
