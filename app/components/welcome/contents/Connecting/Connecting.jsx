import React, { useState ,useEffect} from 'react';
import './Connecting.css';
import logo from '../Assets/logo.png';
import centrelogo from '../Assets/bluetooth.png';
import { useNavigate, useLocation } from 'react-router-dom';
import BackButton from '../BackButtonUI/BackButton';



function PairingPage() {
  const [allowAccess, setAllowAccess] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [pairingCode, setPairingCode] = useState('');

  // Get device name passed from Available page
  const deviceName = location.state?.deviceName || 'Unknown Device';
  const name = localStorage.getItem('name');
  const handlePair = () => {
    if (allowAccess) {
      setShowSuccessModal(true);
    } else {
      alert('Please allow access to your contacts and call history to continue pairing.');
    }
  };
  useEffect(() => {
  const code = Math.floor(100000 + Math.random() * 900000).toString(); // random 6-digit code
  setPairingCode(code);
}, []);

  const proceedToMonitoring = () => {
    setShowSuccessModal(false);
    navigate('/Monitoring');
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
      <BackButton to={-1} label="Back" />

      <div className="content-box p-4 bg-white shadow rounded text-start position-relative">
        <img src={logo} alt="Logo" className="box-logo" />

        <div className="d-flex justify-content-center mt-5 mb-4">
          <img src={centrelogo} alt="Bluetooth" className="big-logo" />
        </div>

        <div className="mb-2 mt-3">
          <strong style={{ color: '#1c4070' }}>Device Name</strong>
          <span className="ms-5 " style={{color:"#1c4070" , fontSize: '15px', fontStyle: 'italic', fontWeight: 'bold' }}> {name ? name : 'Guest'}</span>
        </div>

        <div className="mb-3 mt-3">
          <strong style={{ color: '#1c4070' }}>Selected Device</strong>
          <span className="ms-3" style={{color:"#1c4070" , fontSize: '15px', fontStyle: 'italic', fontWeight: 'bold' }}>{deviceName}</span>
        </div>

        <div className="pairing-box p-3 rounded mt-4">
          <div className="fw-bold mb-2">Pair with {deviceName}?</div>
          <div className="mb-3">
            <div>Bluetooth pairing code</div>
            <div className="fw-bold fs-5">{pairingCode}</div>
          </div>

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

          <div className="d-flex justify-content-end gap-3">
            <button
              className="btn"
              style={{ color: 'var(--primary-color)', fontWeight: '900' }}
              onClick={() => navigate('/scan')}
            >
              Cancel
            </button>
            <button
              className="btn"
              style={{ color: 'var(--primary-color)', fontWeight: '900' }}
              onClick={handlePair}
            >
              Pair
            </button>
          </div>
        </div>
      </div>

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
                <h5 className="modal-title">Successfully Paired</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  aria-label="Close"
                  onClick={() => setShowSuccessModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Would you like to proceed to monitoring?</p>
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
                  className="btn btn-primary"
                  onClick={proceedToMonitoring}
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

export default PairingPage;
