import React from 'react';
import { Outlet, Navigate } from 'react-router';
import SignIn from '../../pages/sign-in/sign-in';
import { useMainContext } from '../../store/MainContext';
/* import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer'; */

function ProtectedRoutes() {
  const { mainState } = useMainContext();
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    mainState.isLoggedIn
      ? (
        <section className="app">
          <button onClick={() => toggleMenu()} type="button" aria-label="menu button" className={`menu-button ${showMenu ? 'hide' : 'show'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" /></svg>
          </button>
          {/* <Navigation showMenu={showMenu} />
          <main className="main">
            <Outlet />
            <Footer /> 
          </main>*/}
        </section>
      )
      : <Navigate to="/sign-in" />
  );
}

export default ProtectedRoutes;