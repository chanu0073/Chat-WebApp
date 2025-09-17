import React from "react";
import "./LoginCard.css"; // optional separate CSS file

export default function LoginCard({ children }) {
  return (
    <div className="login-card">
      <h1 className="login-title">Login</h1>
      {children}
    </div>
  );
}
