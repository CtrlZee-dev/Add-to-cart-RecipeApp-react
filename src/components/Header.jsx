// src/components/Header.jsx

import React, { useContext } from "react";
import headerStyles from './styling/header.module.css';
import { AuthenticationContext } from "../AuthenticationContext";  // adjust path

export default function Header({ viewCart }) {
  const { user, logout } = useContext(AuthenticationContext);

  return (
    <header className={headerStyles.headerContainer}>
      <div className={headerStyles.headerLeft}>
        <img
          src="../src/assets/Logo.png"
          alt="Logo"
          className={headerStyles.headerLogo}
        />
        <h1 className={headerStyles.headerTitle}>The Chefs Notebook</h1>
      </div>

      <div className={headerStyles.headerRight}>  {/* Wrap buttons in right-side container */}
        <button className={headerStyles.cartButton} onClick={viewCart}>
          🛒 Cart
        </button>

        {user && (
          <button
            className={headerStyles.logoutButton}
            onClick={logout}
          >
            Log Out
          </button>
        )}
      </div>
    </header>
  );
}
