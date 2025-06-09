// import React, { useRef, useState } from 'react';
import './Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/logo.png';
import { useNavigate, Link } from 'react-router-dom';
import React, { useRef, useState, useEffect } from 'react';
function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const [error, setError] = useState('');
  const navigate = useNavigate();
    useEffect(() => {
    nameRef.current?.focus(); 
    }, []);
  
  const handleSignUp = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirm = confirmRef.current.value;

    if (!name || !email || !password || !confirm) {
      setError('Please fill all fields');
      return;
    }

    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }

    // Store to localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    setError('');
    alert('Account created successfully!');
    // navigate('/signin')
    // Redirect or navigate to login
  };

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="login-box p-4 shadow rounded-4">
        <div className="text-center mb-3">
          <img src={logo} alt="Logo" className="logo-small" />
        </div>
        <h2 className="text-center mb-4 " style={{color : 'var(--primary-color)', fontWeight: '700'}}>Sign Up</h2>

        <div className="mb-4">
          {/* <label className="form-label text-start w-100 text-dark">Name</label> */}
          <input
            autoComplete="off"
            type="text"
            ref={nameRef}
            className="form-control input-dark text-white bg-dark w-75 mx-auto"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          {/* <label className="form-label text-start w-100 text-dark">Email Address</label> */}
          <input
            type="email"
            ref={emailRef}
            autoComplete="off"
            className="form-control input-dark text-white bg-dark w-75 mx-auto"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          {/* <label className="form-label text-start w-100 text-dark">Password</label> */}
          <input
            type="password"
            ref={passwordRef}
            autoComplete="off"
            className="form-control input-dark text-white bg-dark w-75 mx-auto"
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-4 input-small mx-auto">
          {/* <label className="form-label text-start w-100 text-dark">Confirm Password</label> */}
          <input
            type="password"
            ref={confirmRef}
            autoComplete="off"
            className="form-control input-dark text-white bg-dark w-75 mx-auto"
            placeholder="Confirm your password"
          />
        </div>

        {error && (
          <div className="text-danger text-center mb-2">{error}</div>
        )}

        <div className="d-grid mb-3">
          <button className="btn text-light btn-block w-75 mx-auto" style={{backgroundColor : 'var(--secondary-color)'}} onClick={handleSignUp}>
            Sign Up
          </button>
        </div>

      <div className="text-center mt-2">
      <p className="small text-dark">
        Already have an account? <Link to="/signin" className="text-decoration-none" style={{ color: 'var(--primary-color)' }}>Log in</Link>
      </p>
    </div>
      </div>
    </div>
  );
}

export default Signup;