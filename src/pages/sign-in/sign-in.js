import React from 'react';
import PropTypes from 'prop-types';
import './sign-in.css';
import SignInBox from './sign-in-box';
import { useMainContext } from '../../store/MainContext';
import { useNavigate } from 'react-router';

const SignIn = () => {
  const { mainState } = useMainContext();
  //const [signInSelected, setSignInSelected] = React.useState(true);
  const navigate = useNavigate();
  /* React.useEffect(()=>{
      navigate('/sign-in');
  }, []); */
  function SignIn(){
      return;
  }
  function SignUp(){
      navigate('/sign-up');
  }
  return (
    <div className="sign-in">
          <div className='left-banner'>
              <div className='wrapper-button'>
                  <div className='sign-in-banner' onClick={SignIn}>{mainState.language.signIn}</div>
                  <div className='sign-up-banner' style={{color: "#fff", backgroundColor: "rgb(25,22,69)"}} onClick={SignUp}>{mainState.language.signUp}</div>
              </div>
          </div>
          <div className='right-space'>
              <SignInBox />
          </div>
      </div>
  )
};

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
