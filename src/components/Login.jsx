import React, { useState, useContext } from "react";
import loginStyles from "./styling/login.module.css";
import { AuthenticationContext } from "../AuthenticationContext"; 

export default function Login() {
  const { login, setAuthMode } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const recipeUsers = JSON.parse(localStorage.getItem("recipeUsers")) || [];

    const userEmail = email.trim();
    const userPasswrd = password.trim();

    const user = recipeUsers.find(
      (u) => u.email === userEmail && u.password === userPasswrd
    );

    if (user) {
      sessionStorage.setItem("currentUser", JSON.stringify(user));
      login(user);
    } else {
      setErrorMsg("Invalid email or password.");
    }
  };

  return (
    <div className={loginStyles.loginContainer}>
      <h2 className={loginStyles.loginTitle}>Login</h2>

      {errorMsg && (
        <p role="alert" className={loginStyles.errorMsg}>
          {errorMsg}
        </p>
      )}

      <form onSubmit={handleLogin} className={loginStyles.loginForm}>
        <label>
          Email
          <input
            type="email"
            className={loginStyles.inputField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            className={loginStyles.inputField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </label>
        <button type="submit" className={loginStyles.submitButton}>
          Login
        </button>
      </form>

      <p className={loginStyles.registerText}>
        Don’t have an account?{" "}
        <button
          onClick={() => setAuthMode("register")}
          className={loginStyles.registerButton}
        >
          Register here
        </button>
      </p>
    </div>
  );
}
