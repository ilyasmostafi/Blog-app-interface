import React from 'react';
import './App.css';

function MainContent({ samplePosts }) {
  return (
    <main>
      <section className="welcome-section">
        <h2>Bienvenue sur Mon Blog</h2>
        <p>Découvrez des articles intéressants sur divers sujets.</p>
      </section>
      <section className="about-section">
      {samplePosts.length > 0 ? (
        <ul>
          {samplePosts.map((post, id) => (
            <li key={id}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun article disponible.</p>
      )}
      </section>
    </main>
  );
}

export default MainContent;
