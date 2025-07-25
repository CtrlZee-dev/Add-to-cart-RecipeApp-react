import './styling/Header.css';

export default function Header({ viewCart }) {
  return (
    <header className="header-container">
      <div className="header-left">
        <img src="../src/assets/magic (1).png" alt="Logo" className="logo" />
        <h1 className='header-title'>The Chefs Notebook </h1>
      </div>
      <button className="cart-button" onClick={viewCart}>
        🛒 Cart
      </button>
    </header>
  );
}
