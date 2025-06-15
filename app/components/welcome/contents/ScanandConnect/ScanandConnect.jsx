import React, { useState } from 'react';
import './ScanandConnect.css';
import logo from '../Assets/logo.png';
import { useNavigate } from 'react-router-dom';
import BackButton from '../BackButtonUI/BackButton';

function ScanandConnect() {
  const navigate = useNavigate();
  const [modalData, setModalData] = useState({ show: false, message: '', path: '' });

  const openModal = (message, path) => {
    setModalData({ show: true, message, path });
  };

  const handleConfirm = () => {
    navigate(modalData.path);
    setModalData({ show: false, message: '', path: '' });
  };

  const handleCancel = () => {
    setModalData({ show: false, message: '', path: '' });
  };

  return (
    <div className="connect-wrapper d-flex align-items-center justify-content-center position-relative">
      <BackButton to={-1} label="Back" />
      <div className="connect-box p-4 shadow rounded-4 text-center">
        <div className="mb-3">
          <img src={logo} alt="Logo" className="logo-small" />
        </div>

        <h3 className="mb-2" style={{ color: 'var(--primary-color)', fontWeight: '700' }}>
          Scan and Connect
        </h3>
        <h4 className="mb-4" style={{ color: 'var(--secondary-color)' }}>
          Select BLE device to Connect
        </h4>

        <div className="d-flex flex-column align-items-center gap-3">
          <button
            className="btn text-light w-50 mt-2 mb-4"
            style={{ backgroundColor: 'var(--primary-color)' }}
            onClick={() => openModal('Scanning available devices...', '/available')}
          >
            Scan for devices
          </button>
          <button
            className="btn text-light w-50 mb-4"
            style={{ backgroundColor: 'var(--secondary-color)' }}
            onClick={() => openModal('Connecting to device...', '/bledevice')}
          >
            Connect
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalData.show && (
        <div
          className="modal fade show"
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header  text-white" style={{backgroundColor:"#10b1a7"}}>
                <h5 className="modal-title">Please Confirm</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  aria-label="Close"
                  onClick={handleCancel}
                ></button>
              </div>
              <div className="modal-body">
                <p>{modalData.message}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-outline-secondary" onClick={handleCancel}>
                  Cancel
                </button>
                <button className="btn" style={{backgroundColor:"#1E3E6D" , color:"white"}} onClick={handleConfirm}>
                  Yes, Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScanandConnect;
