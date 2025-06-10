import React, { useRef, useState, useEffect } from 'react';
import './Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/logo.png';
import { useNavigate, Link } from 'react-router-dom';
import BackButton from '../BackButtonUI/BackButton';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Signup() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    firstNameRef.current?.focus();
  }, []);

  const togglePassword = () => setShowPassword(prev => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword(prev => !prev);

  const handleSignUp = () => {
    const firstName = firstNameRef.current.value.trim();
    const lastName = lastNameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value;
    const confirm = confirmPasswordRef.current.value;

    if (!firstName || !lastName || !email || !password || !confirm) {
      setError('Please fill all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Enter a valid email');
      return;
    }

    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }

    // Store to localStorage
    localStorage.setItem('name', `${firstName} ${lastName}`);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    setError('');
    // alert('Account created successfully!');
    
    navigate('/signin');
  };

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center">
      <BackButton to="/signin" label="Back to Sign In" />
      <div className="login-box p-4 shadow rounded-4">
        <div className="text-center mb-3">
          <img src={logo} alt="Logo" className="logo-small" />
        </div>
        <h2 className="text-center mb-4" style={{ color: 'var(--primary-color)', fontWeight: '700' }}>Sign Up</h2>

        <div className="mb-3">
          <input
            autoComplete="off"
            type="text"
            ref={firstNameRef}
            className="form-control text-white w-75 mx-auto"
            style={{ backgroundColor: '#3b4044', borderRadius: '8px' }}
            placeholder="Enter your first name"
          />
        </div>

        <div className="mb-3">
          <input
            autoComplete="off"
            type="text"
            ref={lastNameRef}
            className="form-control text-white w-75 mx-auto"
            style={{ backgroundColor: '#3b4044', borderRadius: '8px' }}
            placeholder="Enter your last name"
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            ref={emailRef}
            autoComplete="off"
            className="form-control text-white w-75 mx-auto"
            style={{
              backgroundColor: '#3b4044',
              borderRadius: '8px',
              border: '1px solid #6c757d'
            }}
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3 position-relative w-75 mx-auto">
          <input
            type={showPassword ? 'text' : 'password'}
            ref={passwordRef}
            autoComplete="off"
            className="form-control text-white pe-5"
            style={{
              backgroundColor: '#3b4044',
              borderRadius: '8px',
              border: '1px solid #6c757d'
            }}
            placeholder="Enter your password"
          />
          <span
            onClick={togglePassword}
            style={{
              position: 'absolute',
              right: '15px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              color: '#ffffffb3'
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="mb-3 position-relative w-75 mx-auto">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            ref={confirmPasswordRef}
            autoComplete="off"
            className="form-control text-white pe-5"
            style={{
              backgroundColor: '#3b4044',
              borderRadius: '8px',
              border: '1px solid #6c757d'
            }}
            placeholder="Confirm your password"
          />
          <span
            onClick={toggleConfirmPassword}
            style={{
              position: 'absolute',
              right: '15px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              color: '#ffffffb3'
            }}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {error && (
          <div className="text-danger text-center mb-2">{error}</div>
        )}

        <div className="d-grid mb-3">
          <button
            className="btn text-light btn-block w-75 mx-auto"
            style={{ backgroundColor: 'var(--secondary-color)' }}
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>

        {/* Optional Guest Login Feature */}
        {/* <div className="text-center mb-3">
          <button
            className="btn btn-outline-light w-75"
            style={{ fontWeight: '500', color: '#1E3E6D' }}
            onClick={handleGuestLogin}
          >
            Continue as Guest
          </button>
        </div> */}

        <div className="text-center mt-2">
          <p className="small text-dark">
            Already have an account?{' '}
            <Link to="/signin" className="text-decoration-none" style={{ color: 'var(--primary-color)' }}>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
