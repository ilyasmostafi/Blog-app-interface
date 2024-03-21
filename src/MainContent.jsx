import React from 'react';
import './App.css';

function MainContent() {
  return (
    <main>
      <section className="welcome-section">
        <h2>Bienvenue sur Mon Blog</h2>
        <p>Découvrez des articles intéressants sur divers sujets.</p>
      </section>
      <section className="about-section">
        <h2>À propos de nous</h2>
        <p>Nous sommes une équipe passionnée de rédacteurs partageant nos connaissances avec vous.</p>
      </section>
    </main>
  );
}

export default MainContent;
