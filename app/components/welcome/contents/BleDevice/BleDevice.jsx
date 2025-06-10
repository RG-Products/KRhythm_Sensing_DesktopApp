import React, { useState } from 'react';
import './BleDevice.css';

import logo from '../Assets/logo.png';
import centrelogo from '../Assets/bluetooth.png';
import { useNavigate } from 'react-router-dom';
import BackButton from '../BackButtonUI/BackButton';
function BleDevicePage() {
    
  const [devices, setDevices] = useState([
    'BLE Device 1',
    'BLE Device 2',
    'BLE Device 3'
  ]);
  const navigate = useNavigate();
  const handlePairNewDevice = () => {
    
    alert('Pairing process triggered...');
    navigate('/available')
    // Here you can trigger BLE scan using Bleak or Web Bluetooth API
  };

  return (
    <div className="ble-wrapper d-flex align-items-center justify-content-center">
      <BackButton to={-1} label="Back" />
      <div className="ble-box p-4 shadow rounded-4 text-center">
        <div className="d-flex justify-content-start mb-3">
          <img src={logo} alt="Logo" className="box-logo" />
        </div>

        <div className="mb-3">
             <img src={centrelogo} alt="Logo" className="big-logo" />
        </div>

        <button
          className="btn  w-50 mb-3"
          style={{backgroundColor: 'var(--primary-color)' , fontWeight:'700', color : 'white' }}
          onClick={handlePairNewDevice}
        >
          Pair New Device
        </button>

        <p className="text-muted small mb-2">Previously connected devices</p>

        <div className="device-list text-center mx-auto mb-2" style={{ width: '50%' }} >
        {devices.map((device, index) => (
            <div
            key={index}
            className="d-flex align-items-center justify-content-between device-row p-2 mb-2 rounded"
            >
            <span className="flex-grow-1 text-center">{device}</span>
            <span className="text-muted"> </span>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default BleDevicePage;