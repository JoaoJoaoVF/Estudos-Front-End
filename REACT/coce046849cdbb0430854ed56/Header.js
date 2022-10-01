import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./react-logo.png" className="nav-logo" />
        <ul className="nav-items">
          <li>Preços</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  );
}
