
import React, { useState, useEffect } from "react";
import { AuthenticationContext } from "./AuthenticationContext";

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authMode, setAuthMode] = useState("login");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setAuthMode("home");
    }
  }, []);

  const login = (loggedInUser) => {
    setUser(loggedInUser);
    sessionStorage.setItem("currentUser", JSON.stringify(loggedInUser));
    setAuthMode("home");
  };

  const register = (registeredUser) => {
    setUser(registeredUser);
    sessionStorage.setItem("currentUser", JSON.stringify(registeredUser));
    setAuthMode("home");

  
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("currentUser");
    setAuthMode("login");
  };


  return (
    <AuthenticationContext.Provider
      value={{
        user,
        authMode,
        setAuthMode,
        login,
        register,
        showSuccessModal,
        setShowSuccessModal,
        logout
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
