import React, { useRef, useState, useEffect } from 'react';
import './Signin.css';
import logo from '../Assets/logo.png';
import { useNavigate, Link } from 'react-router-dom';
import BackButton from '../BackButtonUI/BackButton';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

function Signin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();

  const handleSignIn = () => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (
      emailRef.current.value === storedEmail &&
      passwordRef.current.value === storedPassword
    ) {
      setError(false);
      navigate('/scan');
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      emailRef.current?.focus();
    }, 100); // Delay ensures component fully mounts

    return () => clearTimeout(timer);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center position-relative">
      <BackButton to="/" label="Back to Home" />
      <div className="login-box p-4 shadow rounded-4">
        <div className="text-center mb-3">
          <img src={logo} alt="Logo" className="logo-small" />
        </div>
        <h2 className="text-center mb-4" style={{ color: 'var(--primary-color)', fontWeight: '750' }}>
          Sign In
        </h2>

        {/* Email Input */}
        <div className="mb-3">
          <label className="form-label text-start w-100" style={{ color: 'var(--primary-color)', fontWeight: '500' }}>
            Email Address
          </label>
          <input
            type="email"
            ref={emailRef}
            className="form-control text-white"
            placeholder="Enter your email"
            style={{
              backgroundColor: '#3b4044',
              borderRadius: '8px',
              border: '1px solid #6c757d',
              zIndex: 10,
              pointerEvents: 'auto',
              position: 'relative'
            }}
          />
        </div>

        {/* Password Input */}
        <div className="mb-1 mt-2 position-relative">
          <label className="form-label text-start w-100" style={{ color: 'var(--primary-color)', fontWeight: '500' }}>
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            ref={passwordRef}
            className="form-control text-white pe-5"
            placeholder="Enter your password"
            style={{
              backgroundColor: '#3b4044',
              borderRadius: '8px',
              border: '1px solid #6c757d'
            }}
          />
          <span
            onClick={togglePasswordVisibility}
            style={{
              position: 'absolute',
              right: '20px',
              top: '65%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              color: '#ffffffb3'
            }}
          >
            {showPassword ?  <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        {/* Forgot Password Link */}
        <div className="text-end mb-3 mt-2">
          <Link to="/forgot" className="small text-muted" style={{ fontWeight: '500' }}>
            Forgot Password?
          </Link>
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-danger text-center mb-3">
            Incorrect email or password
          </div>
        )}

        {/* Sign In Button */}
        <div className="d-grid mb-3">
          <button
            className="btn text-light btn-block"
            style={{ backgroundColor: 'var(--secondary-color)', fontWeight: '700' }}
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>

        {/* Sign Up Redirect */}
        <div className="text-center mt-3">
          <p className="small text-dark">
            Don't have an account?{' '}
            <span
              onClick={() => navigate('/signup')}
              style={{ color: 'var(--primary-color)', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Sign up {' '}/
            </span>
            <span
              onClick={() => navigate('/scan')}
              style={{ color: 'var(--primary-color)', cursor: 'pointer', textDecoration: 'underline' }}
            >
              {' '}Login as Guest
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
