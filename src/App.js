import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainContext } from './store/MainContext';
import { getCookie } from './helpers/UserSignedIn';
import View from './components/views/Views';
import english from './languages/English.js';
import { LOCAL_STORAGE_NAME } from './store/user-details';

function App() {
  const userDetails = localStorage.getItem(LOCAL_STORAGE_NAME);
  const [mainState, setMainState] = React.useState({
    languageCode: 'en',
    language: english,
    isLoggedIn: Boolean(getCookie()),
    dir: 'rtl',
    userDetails: userDetails ? JSON.parse(userDetails) : {
      address: '',
      city: '',
      country: '',
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      token: '',
    },
  });

  return (
    <MainContext.Provider value={{ mainState, setMainState }}>
      <BrowserRouter>
        <View />
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
