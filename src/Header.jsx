import React from 'react';
import './App.css';

function Header() {
  return (
    <header>
      <h1>Mon Blog</h1>
      <nav>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Articles</a></li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
