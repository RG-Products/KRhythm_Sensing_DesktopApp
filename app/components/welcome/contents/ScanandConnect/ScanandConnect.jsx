import React from 'react';
import './ScanandConnect.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/logo.png';
import { useNavigate } from 'react-router-dom';
function ScanandConnect() {
  const navigate = useNavigate();
  const handleScan = () => {
    alert('Scanning available device...');
    navigate('/available');  
  };

  const handleConnect = () => {
    alert('Connecting to device...');
    navigate('/bledevice');
    
  };

  return (
    <div className="connect-wrapper d-flex align-items-center justify-content-center">
      <div className="connect-box p-4 shadow rounded-4 text-center">
        <div className="mb-3">
          <img src={logo} alt="Logo" className="logo-small" />
        </div>

        <h3 className=" mb-2" style={{color : 'var(--primary-color)', fontWeight: '700'}}>Scan and Connect</h3>
        <h4 className=" mb-4" style={{color : 'var(--secondary-color)'}}>Select BLE device to Connect</h4>
        <div className="d-flex flex-column align-items-center gap-3">
        <button className="btn text-light w-50 mt-2 mb-4" style={{backgroundColor : 'var(--primary-color)'} } onClick={handleScan}>
            Scan for devices
        </button>
        <button className="btn text-light w-50 mb-4" style={{backgroundColor : 'var(--secondary-color)'}} onClick={handleConnect}>
            Connect
        </button>
        </div>
      </div>
    </div>
  );
}

export default ScanandConnect;
