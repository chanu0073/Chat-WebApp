import React from "react";
import "./LoginCard.css"; 

export default function LoginCard({ children }) {
  return (
    <div className="login-card">
      <h1 className="login-title">Login</h1>
      {children}
    </div>
  );
}
