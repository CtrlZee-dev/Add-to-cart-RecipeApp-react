
import React from "react";
import ReactDOM from "react-dom";

import SuccessModalStyles from './styling/recipeCard.module.css';

export default function SuccessModal({ message, onClose }) {
  console.log("Success message:", message);
  
  const successModal = document.getElementById("modal-login");


  if (!successModal) {
    console.error("successModal root not found!");
    return null;
  }



  return ReactDOM.createPortal(
    <div style={SuccessModalStyles.successModalContainer}>
      <div style={SuccessModalStyles.successModalContent}>
        <div style={SuccessModalStyles.successMessage}>✓</div>
        <p style={SuccessModalStyles.successMessage}>{message}</p>
        {onClose && (
          <button 
            onClick={onClose}
            style={SuccessModalStyles.successIcon}
          >
            Close
          </button>
        )}
      </div>
    </div>,
    successModal
  );
}