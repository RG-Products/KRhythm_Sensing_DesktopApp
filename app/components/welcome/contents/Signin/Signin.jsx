import React, { useRef, useState, useEffect } from 'react';
import './Signin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/logo.png';
import { useNavigate, Link } from 'react-router-dom';

function Signin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(false);
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
  }, 100);  // 100 ms delay

  return () => clearTimeout(timer);
}, []);


  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="login-box p-4 shadow rounded-4">
        <div className="text-center mb-3">
          <img src={logo} alt="Logo" className="logo-small" />
        </div>
        <h2 className="text-center mb-4" style={{ color: 'var(--primary-color)', fontWeight: '750' }}>
          Sign In
        </h2>

        <div className="mb-3">
          <label className="form-label text-start w-100" style={{ color: 'var(--primary-color)', fontWeight: '500' }}>
            Email Address
          </label>
          <input
            type="email"
            ref={emailRef}
            className="form-control input-dark text-white bg-dark"
            placeholder="Enter your email"
            style={{
              zIndex: 10,
              pointerEvents: 'auto',
              position: 'relative'
            }}
          />

        </div>

        <div className="mb-1 mt-2">
          <label className="form-label text-start w-100" style={{ color: 'var(--primary-color)', fontWeight: '500' }}>
            Password
          </label>
          <input
            type="password"
            ref={passwordRef}
            className="form-control input-dark text-white bg-dark"
            placeholder="Enter your password"
          />
        </div>

        <div className="text-end mb-3 mt-2">
          <Link to="/forgot" className="small text-muted" style={{ fontWeight: '500' }}>
            Forgot Password?
          </Link>
        </div>

        {error && (
          <div className="text-danger text-center mb-3">
            Incorrect email or password
          </div>
        )}

        <div className="d-grid mb-3">
          <button
            className="btn text-light btn-block"
            style={{ backgroundColor: 'var(--secondary-color)', fontWeight: '700' }}
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>

        <div className="text-center mt-3">
          <p className="small text-dark">
            Don't have an account?{' '}
            <span
              onClick={() => navigate('/signup')}
              style={{ color: 'var(--primary-color)', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
