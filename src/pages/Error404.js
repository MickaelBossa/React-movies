// Librairies
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Error404() {
  return (
    <div className='error'>
      <h1>Erreur 404</h1>
      <h3>La page que vous avez demandé n'existe pas</h3>
      <NavLink to='/' className='btn'>
        <button>Retour à la page d'accueil</button>
      </NavLink>
    </div>
  );
}
