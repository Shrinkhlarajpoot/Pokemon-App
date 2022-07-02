import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleAuth } from '../context/authContext';
const LoginButton = () => {
  const { googleAuth, token, loginWithCredentials } = useGoogleAuth();
  const navigate = useNavigate();
  useEffect(() => {
    token && navigate('/list');
  }, [token, navigate]);
  const clickHandler = async () => {
    const response = await googleAuth?.signIn();
    loginWithCredentials({ response });
  };
  return (
    <>
      <div className='login-btn-container'>
     <button className='login-btn' onClick={clickHandler}>
          Login
        </button>
      </div>
    </>
  );
};

export default LoginButton;