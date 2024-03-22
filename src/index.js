// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const propsheader = {
  backgroundColor : "#343434",
  title: " Blog ilyas mostafi",
  navigationLinks: ['Accueil', 'À Propos', 'Contact'],
  onLogin: false,
  
};
const samplePosts = [
  { id: 1, title: "Premier Article", description: "Ceci est le premier article" },
  { id: 2, title: "Deuxième Article", description: "Ceci est le deuxième article" }
];
export default { propsheader, samplePosts };

