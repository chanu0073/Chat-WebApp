import React, { useState } from "react";
import "./AIComposerPanel.css";

export default function AIComposerPanel({ onClose }) {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleGenerate = async () => {
    // later connect this to your backend/LLM API
    setResult("✨ This is where AI response will appear for: " + prompt);
  };

  return (
    <div className="ai-composer-panel">
      <div className="ai-composer-header">
        <h3>AI Composer</h3>
        <button onClick={onClose}>✖</button>
      </div>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Write your prompt for AI..."
      />
      <button className="generate-btn" onClick={handleGenerate}>
        Generate
      </button>
      {result && <div className="ai-result">{result}</div>}
    </div>
  );
}
