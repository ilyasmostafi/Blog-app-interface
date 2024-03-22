import React from 'react';
import './App.css';

function Header({ propsheader }) {
  return (
    <div><header  style={{ backgroundColor: propsheader.backgroundColor }}>
      <h1>{propsheader.title}</h1>
      <nav>
        <ul>
          <li><a href="#">{propsheader.navigationLinks[0]}</a></li>
          <li><a href="#">{propsheader.navigationLinks[1]}</a></li>
          <li><a href="#">{propsheader.navigationLinks[2]}</a></li>
          <li>
            {propsheader.onLogin ? <button> Déconnexion </button> : <button> Connexion </button>}
          </li>
        </ul>
      </nav>
    </header></div>
  )
}

export default Header;

