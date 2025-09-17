import React from "react";
import "./SignUpCard.css";

export default function SignUpCard({ children }) {
  return (
    <div className="signup-card">
      <h1 className="signup-title">Create Account</h1>
      {children}
    </div>
  );
}
