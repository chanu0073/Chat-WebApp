import React from "react";
import LoginCard from "../components/LoginCard";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="login-page">
      <LoginCard>
        <LoginForm />
      </LoginCard>
    </div>
  );
}
