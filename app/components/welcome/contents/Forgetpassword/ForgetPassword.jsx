import React, { useRef } from 'react';
import './ForgetPassword.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/logo.png'; 
import { useNavigate } from 'react-router-dom';
import BackButton from '../BackButtonUI/BackButton';
function ForgotPassword() {
  const emailRef = useRef();
  const navigate = useNavigate();
  const backtologin = () => { 
    navigate('/signin')
  }
  const handleReset = () => {
    alert(`Reset link sent to: ${emailRef.current.value}`);
  };

  return (
    <div className="forgot-wrapper d-flex align-items-center justify-content-center">
      <BackButton to={-1} label="Back" />
      <div className="forgot-box text-center p-4 shadow rounded-4">
        <img src={logo} alt="Logo" className="logo mb-5" />

        <h4 className="fw-bold  mb-4"style={{ color: 'var(--primary-color)' }}>Forgot Password</h4>
        <p className="mb-5" style={ {fontWeight:'500',color: 'var(--secondary-color)'}}>Enter your email to reset your password.</p>

        <input
          type="email"
          style={{ color:'white'}}
          ref={emailRef}
          className="form-control text-white bg-dark border-0 mb-5 text-center mx-auto w-75"
          placeholder="yourname***@mail.com"
          autoComplete='off'
          autoFocus

        />

        <button className="btn  text-white  fw-bold mb-4" style={{ width: '75%',backgroundColor: 'var(--secondary-color)' }} onClick={handleReset}>
          Reset Password
        </button>

        <p className="text-muted small mb-4" style={ {fontWeight:'500'}}>
          ( You’ll get the reset mail ! )
        </p>
        <div className="fw-semibold" style={ {fontWeight:'700',color: 'var(--primary-color)' }} onClick={backtologin}>Back to login</div>
      </div>
    </div>
  );
}

export default ForgotPassword;
