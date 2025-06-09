import React, { useState } from 'react';
import './Connecting.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/logo.png';
import centrelogo from '../Assets/bluetooth.png';
import { color } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function PairingPage() {
  const [allowAccess, setAllowAccess] = useState(false);
  const navigate = useNavigate();
  const UserProfile = () => { 
    alert("Successfully Paired")
    navigate('/Monitoring')
  }
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="content-box p-4 bg-white shadow rounded text-start position-relative">
        
        {/* Top-left logo inside box */}
        
        <img src={logo} alt="Logo" className="box-logo" />
        {/* Centered medium logo */}
        <div className="d-flex justify-content-center mt-5 mb-4">
          <img src={centrelogo} alt="Bluetooth" className="big-logo" />
        </div>

        {/* Device Name and Available Devices */}
        <div className="mb-2 mt-3">
          <strong style={{ color: '#1c4070' }}>Device Name</strong>
          <span className="ms-5 text-muted">Rajagopal</span>
        </div>
        <div className="mb-3 mt-3">
          <strong style={{color :'#1c4070'}}>Available Devices</strong>
        </div>

        {/* Pairing Dialog */}
        <div className="pairing-box p-3 rounded mt-4">
          <div className="fw-bold mb-2">Pair with BLE Device 1?</div>
          <div className="mb-3">
            <div>Bluetooth pairing code</div>
            <div className="fw-bold fs-5">123456</div>
          </div>

          {/* Checkbox */}
            <div className="form-check mb-3">
            <input
                className="form-check-input"
                type="checkbox"
                id="allowAccess"
                checked={allowAccess}
                onChange={() => setAllowAccess(!allowAccess)}
            />
            <label className="form-check-label small ms-2" htmlFor="allowAccess">
                Allow access to your contacts and call history
            </label>
            </div>

          {/* Buttons */}
          <div className="d-flex justify-content-end gap-3">
            <button className="btn " style={{color : 'var(--primary-color)', fontWeight: '900'}} onClick={() => navigate('/')}>Cancel</button>
            <button className="btn " style={{color : 'var(--primary-color)', fontWeight: '900'}} onClick={() => UserProfile()}>Pair</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PairingPage;
