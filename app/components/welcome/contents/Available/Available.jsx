import React, { useState } from 'react';
import './Available.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/logo.png';
import centrelogo from '../Assets/bluetooth.png';
import spinning from '../Assets/spining.png';
import bluetoothicon from '../Assets/Blicon.png'
import { useNavigate } from 'react-router-dom';
import BackButton from '../BackButtonUI/BackButton';

function Available() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const devices = ['Bluetooth Device 1', 'Bluetooth Device 2', 'Bluetooth Device 3'];
  const navigate = useNavigate();
  const name = localStorage.getItem('name');
  const sonnectingPage = (deviceName) => {
  navigate('/connecting', { state: { deviceName } });
};

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
      <BackButton to={-1} label="Back" />
      <div className="content-box position-relative p-4 bg-white shadow rounded text-center ">
        {/* Small logo in top-left of box */}
        <img src={logo} alt="Small Logo" className="box-logo" />

        {/* Medium logo in center */}
        <img src={centrelogo} alt="Medium Logo" className="big-logo mb-4 mt-5" style={{ width: '120px' , paddingTop:'50px'}} />

        {/* Device Name Section */}
         <div className="mb-2 mt-3  text-start">
          <strong style={{ color: '#1c4070' }}>Device Name</strong>
          <span className="ms-5" style={{color:"#1c4070" , fontSize: '15px', fontStyle: 'italic', fontWeight: 'bold' }}> {name ? name : 'Guest'}</span>
        </div>
        <div className="mb-3 mt-3 text-start">
          <strong style={{color :'#1c4070'}}>Available Devices</strong>
          <img src={spinning} alt="Spinning" className="spinner-logo ms-5" />
        </div>

        {/* Device Rows */}
                {devices.map((device, index) => (
          <div
            key={index}
            className={`device-row d-flex align-items-center justify-content-between p-3 mb-2 rounded ${hoveredIndex === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => sonnectingPage(device)}
          >
            <img src={bluetoothicon} alt="Bluetooth" className="text-primary bluetooth-icon-wrapper" />
            <div className="flex-grow-1 text-center" style={{ color: 'var(--primary-color)' }}>{device}</div>
            <div className="text-end text-muted" style={{ width: '80px' }}>
              {hoveredIndex === index ? 'Pairing…' : ''}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Available;