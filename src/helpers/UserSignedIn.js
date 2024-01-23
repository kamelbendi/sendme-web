import { COOKIE_NAME, LOCAL_STORAGE_NAME } from '../store/user-details';
import { UserDetails } from '../store/user-details';

export function UserSignedIn(user) {
  const currentDate = new Date();
  currentDate.setTime(currentDate.getTime() + (3 * 24 * 60 * 60 * 1000));
  const expires = `expires=${currentDate.toUTCString()}`;

  document.cookie = `${COOKIE_NAME}=${user.token};${expires};path=/`;
  localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(user));
}

export function getCookie() {
  const name = `${COOKIE_NAME}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');

  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];

    while (c.charAt(0) === ' ') { c = c.substring(1); }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return '';
}

export function deleteCookie() {
  document.cookie = `${COOKIE_NAME}= ;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  localStorage.removeItem(LOCAL_STORAGE_NAME);
}