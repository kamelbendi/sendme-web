import React from 'react';
import './notFound.css';
import { NavLink } from 'react-router-dom';
import { useMainContext } from '../../store/MainContext';

function NotFound() {
  const { mainState } = useMainContext();

  return (
    <section className="not-found-container">
      <h1>{mainState.language.pageNotFound}</h1>
      <p>404</p>
      <NavLink to="/dashboard" className="link">{mainState.language.goHome}</NavLink>
    </section>
  );
}

export default NotFound;
