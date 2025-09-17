import React from "react";
import SignUpCard from "../components/SignUpCard";
import SignUpForm from "../components/SignUpForm";
import "../index.css";

export default function SignUp() {
  return (
    <div className="signup-page">
      <SignUpCard>
        <SignUpForm />
      </SignUpCard>
    </div>
  );
}
