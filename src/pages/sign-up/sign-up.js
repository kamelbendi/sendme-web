import React from 'react';
import PropTypes from 'prop-types';
import styles from './sign-up.css';
import { useMainContext } from '../../store/MainContext';
import { useNavigate } from 'react-router';

const SignUp = () => {
  const { mainState } = useMainContext();
  const navigate = useNavigate();
  function SignUp(){
      return;
  }
  function SignIn(){
      navigate('/sign-in');
  }
  return (
    <div className="sign-in">
          <div className='left-banner'>
              <div className='wrapper-button'>
                  <div className='sign-in-banner' style={{color: "#fff", backgroundColor: "rgb(25,22,69)"}} onClick={SignIn}>{mainState.language.signIn}</div>
                  <div className='sign-up-banner' onClick={SignUp}>{mainState.language.signUp}</div>
              </div>
          </div>
          <div className='right-space'>
              {/* //<SignInBox /> */}
          </div>
      </div>
  )
};

SignUp.propTypes = {};

SignUp.defaultProps = {};

export default SignUp;
