import { Link } from "react-router";
import "./Auth.css";
import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState("");

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setError("Invalid credentials");
    console.log(Object.fromEntries(formData.entries()));
  }
  return (
    <div className="card auth-form">
      <h1 className="form__title">Sign in</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form__error">{error}</div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="input"
            id="email"
            name="email"
            autoComplete="on"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="input"
            id="password"
            name="password"
          />
        </div>
        <div className="auth-form__msg">
          You don't have an account?{" "}
          <Link to="/register" className="link">
            Sign up here
          </Link>
        </div>
        <div className="form__actions">
          <button className="btn btn--primary btn--large">Sign in</button>
        </div>
      </form>
    </div>
  );
}
