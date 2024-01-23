import React from 'react';
import { getCookie } from '../helpers/UserSignedIn';
import english from '../languages/English.js';
import { LOCAL_STORAGE_NAME } from './user-details';

const userDetails = localStorage.getItem(LOCAL_STORAGE_NAME);

export const MainContext = React.createContext({
  mainState: {
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
  },
});

export const useMainContext = () => React.useContext(MainContext);
