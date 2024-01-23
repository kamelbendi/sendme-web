import React from "react";
import axios, { AxiosResponse } from 'axios';
import apiUrl from '../../api-urls';
import { useNavigate } from "react-router-dom";
import { useMainContext } from '../../store/MainContext';
import { UserSignedIn, deleteCookie } from '../../helpers/UserSignedIn';
import './sign-in.css'

export default function SignInBox () {
    const navigate = useNavigate();
    const { mainState, setMainState } = useMainContext();
    const [form, setForm] = React.useState({
        email: '',
        password: '',
    })
    React.useEffect(() => {
        setMainState({ ...mainState, isLoggedIn: false });
        deleteCookie();
    }, []);

  function handleEmailChange(email) {
    // is string ?
    setForm({
      ...form, email,
    });
  }

  function handlePasswordChange(password) {
    // is string ?
    setForm({
      ...form, password,
    });
  }

  /* function submitSignIn(e: any): void {
    e.preventDefault();
    axios.post(apiUrl.login, {
      user: form.email,
      password: form.password,
    })
      .then((response: AxiosResponse) => {
        UserSignedIn(response.data);
        setMainState({
          ...mainState,
          isLoggedIn: true,
          userDetails: response.data,
        });
        navigate('/dashboard');
      }).catch(() => {
        // setStatusPopUp({ type: 'failed', message: 'failled To Login, please try again.', show: true });
        // setTimeout(() => setStatusPopUp({ type: '', message: '', show: false }), 3000);
        // setIsLoading(false);
        alert("err");
      }); 
  } */
  const headers = {
        'Content-Type': 'application/json',
        'host': '192.168.0',
        'Access-Control-Alow-Origin': '*',
    };
  function submitSignIn(e) {
    console.log(form.password)
    e.preventDefault();
    axios.post(apiUrl.login, {
      email: form.email,
      password: form.password,
    }, {headers})
      .then((response) => {
        alert('done');
        UserSignedIn(response.data);
        setMainState({
          ...mainState,
          isLoggedIn: true,
          userDetails: response.data
        });
        navigate('/dashboard');
      }).catch(() => {
        // setStatusPopUp({ type: 'failed', message: 'failled To Login, please try again.', show: true });
        // setTimeout(() => setStatusPopUp({ type: '', message: '', show: false }), 3000);
        // setIsLoading(false);
        alert("err");
      });
  }
    return (
        <section className="sign-in-container" dir={mainState.dir}>
            <div className="sign-in-box">
                {/* <img src={logo} className="logo" alt="inzo logo" /> */}
                <h2 className="title">{mainState.language.signIn}</h2>
                <form onSubmit={(e) => submitSignIn(e)} className="form">
                <input type="email" className="input-field" placeholder={mainState.language.email} onChange={(e) => handleEmailChange(e.target.value)} />
                {/* {form.isEmailDirty && !form.isEmailValid && <span className="error">{mainState.language.enterValidEmail}</span>} */}
                <input type="password" className="input-field" placeholder={mainState.language.password} onChange={(e) => handlePasswordChange(e.target.value)} />
                {/* {form.isPasswordDirty && !form.isPasswordValid && <span className="error">{mainState.language.enterValidPassword}</span>} */}
                {/* {statusPopUp.type === 'failed' && !isLoading && <span className="error">{statusPopUp.message}</span>} */}
                <button type="submit" aria-label="sign in button" className="sign-in-btn" /* disabled={!form.isEmailValid || !form.isPasswordValid || isLoading} */>{mainState.language.signIn}</button>
                </form>
                {/* <NavLink to="/forget-password" className="link"> */}
                {/* {mainState.language.forgetPassword} 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock icon" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                </svg>
                </NavLink>
                */}
            </div>
         </section>
    );
}