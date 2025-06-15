import React, { useState } from 'react';
import './BleDevice.css';

import logo from '../Assets/logo.png';
import centrelogo from '../Assets/bluetooth.png';
import { useNavigate } from 'react-router-dom';
import BackButton from '../BackButtonUI/BackButton';

function BleDevicePage() {
  const [devices, setDevices] = useState([
    'BLE Device x',
    'BLE Device y',
    'BLE Device z',
  ]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const handlePairNewDevice = () => {
    setShowSuccessModal(true); // Show confirmation modal
  };

  const redirecttohome = () => {
    navigate('/monitoring');
  };

  const proceedToAvailable = () => {
    setShowSuccessModal(false);
    navigate('/available');
  };

  return (
    <div className="ble-wrapper d-flex align-items-center justify-content-center">
      <BackButton to={-1} label="Back" />
      <div className="ble-box p-4 shadow rounded-4 text-center">
        <div className="d-flex justify-content-start mb-3">
          <img src={logo} alt="Logo" className="box-logo" />
        </div>

        <div className="mb-3">
        <img src={centrelogo} alt="Bluetooth Logo" className="big-logo" />
      </div>

        <button
          className="btn w-50 mb-3"
          style={{ backgroundColor: 'var(--primary-color)', fontWeight: '700', color: 'white' }}
          onClick={handlePairNewDevice}
        >
          Pair New Device
        </button>

        <p className="text-muted small mb-2">Previously connected devices</p>

        <div className="device-list text-center mx-auto mb-2" style={{ width: '50%' }}>
          {devices.map((device, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-between device-row p-2 mb-2 rounded"
              onClick={redirecttohome}
            >
              <span className="flex-grow-1 text-center">{device}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showSuccessModal && (
        <div
          className="modal fade show"
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">

              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">Pairing Confirmation</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  aria-label="Close"
                  onClick={() => setShowSuccessModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                <p>Begin pairing?</p>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowSuccessModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn "
                  style={{ backgroundColor: 'var(--primary-color)', color:"white"}}
                  onClick={proceedToAvailable}
                >
                  Yes, Proceed
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BleDevicePage;
