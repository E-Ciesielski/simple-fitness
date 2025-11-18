import { Link } from "react-router";
import "./Auth.css";
import React, { useState } from "react";

export default function RegisterPage() {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const email = formData.get("email")?.toString().trim() ?? undefined;
    const password = formData.get("password")?.toString().trim() ?? undefined;

    setEmailError("");
    setPasswordError("");
    let error = false;
    if (!email) {
      setEmailError("Email is required");
      error = true;
    }

    if (!password) {
      setPasswordError("Password is required");
      error = true;
    } else if (password?.length < 4) {
      setPasswordError("Password must be atleast 4 characters long");
      error = true;
    }

    if (error) {
      return;
    }

    console.log(Object.fromEntries(formData.entries()));
  }
  return (
    <div className="card auth-form">
      <h1 className="form__title">Sign up</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="input"
            id="email"
            name="email"
            autoComplete="on"
          />
          <div className="form-group__error">{emailError}</div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="input"
            id="password"
            name="password"
            maxLength={200}
          />
          <div className="form-group__error">{passwordError}</div>
        </div>
        <div className="auth-form__msg">
          Already have an account?{" "}
          <Link to="/login" className="link">
            Sign in here
          </Link>
        </div>
        <div className="form__actions">
          <button className="btn btn--primary btn--large">Sign up</button>
        </div>
      </form>
    </div>
  );
}
