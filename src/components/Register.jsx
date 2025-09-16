
import React, { useState, useContext } from "react";
import signUpStyles from './styling/SignUp.module.css';
import { AuthenticationContext } from "../AuthenticationContext"; // correct path

export default function Register() {
  const { register, setAuthMode,setShowSuccessModal, } = useContext(AuthenticationContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

  
    const activeRecipeUsers = JSON.parse(localStorage.getItem("recipeUsers")) || [];

  
    const emailExists = activeRecipeUsers.some(user => user.email === email.trim());
    if (emailExists) {
      setErrorMsg("Email already registered.");
      return;
    }

 
    const newUser = {
      name: name.trim(),
      surname: surname.trim(),
      email: email.trim(),
      password: password.trim(),
      cartItems: []
    };
    
    const updatedUsers = [...activeRecipeUsers, newUser];
    localStorage.setItem("recipeUsers", JSON.stringify(updatedUsers));

    // Use context register
    register(newUser, ()=>{
      setShowSuccessModal(true);
      setTimeout(() => setShowSuccessModal(false), 3000);
    })
  


 

    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
    setErrorMsg("");
  };

  return (
    <div className={signUpStyles.signupContainer}>
      <h2 className={signUpStyles.signupTitle}>Create Account</h2>
      {errorMsg && <p role="alert" className={signUpStyles.errorMsg}>{errorMsg}</p>}
      <form onSubmit={handleSignUp} className={signUpStyles.signupForm}>
        <label>
          First Name
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className={signUpStyles.inputField}
          />
        </label>
        <label>
          Surname
          <input
            type="text"
            value={surname}
            onChange={e => setSurname(e.target.value)}
            required
            className={signUpStyles.inputField}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="email"
            className={signUpStyles.inputField}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete="new-password"
            className={signUpStyles.inputField}
          />
        </label>
        <button type="submit" className={signUpStyles.submitButton}>Register</button>
      </form>
      <p className={signUpStyles.switchText}>
        Already have an account?{" "}
        <button
          onClick={() => setAuthMode("login")}
          className={signUpStyles.switchButton}
        >
          Login here
        </button>
      </p>
    </div>
  );
}
