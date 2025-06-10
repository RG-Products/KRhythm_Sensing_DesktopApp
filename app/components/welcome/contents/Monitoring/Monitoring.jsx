import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton } from "react-bootstrap";
import { FaBluetooth, FaHome, FaUserInjured, FaCog, FaQuestionCircle, FaDownload, FaHeart } from "react-icons/fa";
import Heartbeat from "./Heartbeat";
import logo from '../Assets/logo.png';
import './Monitoring.css';
import { FaUserCircle } from 'react-icons/fa';
import { FaHeartPulse } from "react-icons/fa6";
import HeartbeatBP from "./HBBloodPressure";
import { useNavigate } from 'react-router-dom';
import { RiLogoutCircleLine } from "react-icons/ri";

const Monitoring = () => {
  const [graphOption, setGraphOption] = useState(1);
  const [showGraph, setShowGraph] = useState(false);
  const [resetSignal, setResetSignal] = useState(false);
  const [isMonitoring, setIsMonitoring] = useState(false);

  const navigate = useNavigate();

  const handleStart = () => {
  setShowGraph(true);
  setResetSignal(false);
  setIsMonitoring(true);  // Start blinking
};

const handleStop = () => {
  setShowGraph(false);
  setIsMonitoring(false); // Stop blinking
};
  const handleReset = () => {
    setShowGraph(false);
    setResetSignal(true);
    setTimeout(() => {
      setShowGraph(true);
      setResetSignal(false);
    }, 100);
  };

  // Sample data (replace this with actual data from your chart if possible)
  const heartRateData = [
    { time: '10:00', value: 72 },
    { time: '10:01', value: 74 },
    { time: '10:02', value: 70 }
  ];

  const bpData = [
    { time: '10:00', systolic: 120, diastolic: 80 },
    { time: '10:01', systolic: 122, diastolic: 82 },
    { time: '10:02', systolic: 119, diastolic: 78 }
  ];

  // Convert data to CSV format
  const convertToCSV = (data, type) => {
    if (type === 1) {
      return "Time,Heart Rate (BPM)\n" + data.map(d => `${d.time},${d.value}`).join("\n");
    } else if (type === 2) {
      return "Time,Systolic,Diastolic\n" + data.map(d => `${d.time},${d.systolic},${d.diastolic}`).join("\n");
    } else {
      const combined = "Time,Heart Rate (BPM),Systolic,Diastolic\n" +
        data.map((_, i) =>
          `${heartRateData[i]?.time || ''},${heartRateData[i]?.value || ''},${bpData[i]?.systolic || ''},${bpData[i]?.diastolic || ''}`
        ).join("\n");
      return combined;
    }
  };

  const handleDownload = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    let csv = convertToCSV(graphOption === 1 ? heartRateData : graphOption === 2 ? bpData : [], graphOption);
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    const timestamp = `${day}-${month}-${year}_${hours}-${minutes}-${seconds}`;
    link.download = `MonitoringData_${timestamp}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const iconStyleWhite = {
    color: '#ffffff',
    backgroundColor: '#1E3E6D',
    padding: '8px',
    borderRadius: '50%',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };
  return (
    <div className="container-fluid rounded-4 mainmonitoring">
      <div className="text-white text-center py-3 pt-4 rounded titlebar">
        <img src={logo} alt="Logo" className="titlelogo" />
      </div>

      <div className="row no-gutters ml-20px" style={{ flexWrap: 'nowrap' }}>
        <div className="col-md-2 d-flex flex-column align-items-center py-4 sidebar"
          style={{ minHeight: '200px', maxHeight: '800px', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>

          <div className="mb-4 text-center">
            <FaUserCircle size={68} style={iconStyleWhite} />
            <p className="mt-2 fw-semibold" style={{ color: '#1E3E6D' }}>Rajagopal</p>
          </div>

          <div className="d-flex flex-column align-items-center gap-4">
            <FaHome size={40} style={iconStyleWhite} onClick={() => navigate('/')} />
            <FaUserInjured size={40} style={iconStyleWhite} />
            <FaCog size={40} style={iconStyleWhite} />
            <FaQuestionCircle size={40} style={iconStyleWhite} />
            <RiLogoutCircleLine size={40} style={iconStyleWhite} onClick={() => navigate('/')}/>
          </div>
        </div>

        <div className="col-md-10 p-4 maintitle">
          <div className="d-flex align-items-center gap-3 mb-4 flex-nowrap">
            <button className="btn Monitorbutton ms-auto" onClick={handleStart}
              style={{ backgroundColor: '#10b1a7', color: 'white', border: '2px solid white', width: '120px' }}>Start</button>

            <button className="btn Monitorbutton ms-auto" onClick={handleStop}
              style={{ backgroundColor: '#10b1a7', color: 'white', border: '2px solid white', width: '120px' }}>Stop</button>

            <div className="d-flex align-items-center gap-2 blClass">
              <FaBluetooth size={24} className={isMonitoring ? "blinking-bluetooth" : ""} style={{ color: isMonitoring ? undefined : " #1E3E6D" }} />
              <span>Bluetooth Connected</span>
            </div>


           <button
            className="btn Monitorbutton2 ms-auto"
            onClick={handleReset}
            style={{ backgroundColor: '#1E3E6D', color: 'white', border: '2px solid white', width: '120px' }}
            >
            Reset
            </button>

            <DropdownButton id="dropdown-basic-button" className="dropbutton custom-dropdown"
              title="   Vital Metrics  " variant="bg-outline-light"
              style={{ width: '180px', height: '48px', fontSize: '1.1rem', padding: '5px 3px', marginLeft:'6px', marginRight:'0px'}}>
              <Dropdown.Item onClick={() => setGraphOption(1)}>Heart Rate</Dropdown.Item>
              <Dropdown.Item onClick={() => setGraphOption(2)}>Blood Pressure</Dropdown.Item>
              <Dropdown.Item onClick={() => setGraphOption(3)}>All</Dropdown.Item>
            </DropdownButton>
     
            <FaDownload size={28} className="download" onClick={handleDownload} style={{ cursor: 'pointer',marginRight:'30px' }} />
          </div>

          {showGraph && (
            <div className="mb-4 d-flex flex-column" style={{ height: "400px", maxHeight: "500px" }}>
              {(graphOption === 1) && (
                <div className="d-flex flex-row mb-3 graphone" style={{ flex: 1 }}>
                  <div className="flex-grow-1 rounded me-3 d-flex flex-column justify-content-center align-items-center" style={{ height: "100%" }}>
                    <div className="w-100 h-100">
                      <Heartbeat reset={resetSignal} />
                    </div>
                  </div>
                  <div style={{ width: "20%" }} className="shadow rounded p-3 d-flex align-items-center gap-3 graphonetext">
                    <FaHeart className="text-danger heartbeat-icon" size={70} />
                    <div>
                      <p className="mb-1" style={{ color: "#1E3E6D" }}>Heart Rate</p>
                      <h5 className="m-0" style={{ color: "#1E3E6D" }}>70 BPM</h5>
                    </div>
                  </div>
                </div>
              )}

              {(graphOption === 2) && (
                <div className="d-flex flex-row mb-3 graphonetwo" style={{ flex: 1 }}>
                  <div className="flex-grow-1 rounded me-3 d-flex flex-column justify-content-center align-items-center" style={{ height: "100%" }}>
                    <div className="w-100 h-100">
                      <HeartbeatBP reset={resetSignal} />
                    </div>
                  </div>
                  <div style={{ width: "20%" }} className="bg-white shadow rounded p-3 d-flex align-items-center gap-3 graphonetext">
                  <FaHeartPulse className="text-danger heartbeat-icon" size={70} />
                  <div>
                    <p className="mb-1 bp-label" style={{ color: "#1E3E6D" }}>BLOOD PRESSURE</p>
                    <h5 className="m-0 bp-value" style={{ color: "#1E3E6D" }}>120 / 80</h5>
                  </div>
                </div>
                </div>
              )}

              {graphOption === 3 && (
              <div className="d-flex flex-column gap-3">
                {[1, 2].map((_, index) => (
                  <div key={index} className="d-flex flex-row graphonethree" style={{ flex: 1 }}>
                  <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                    <div style={{ transform: 'scale(0.5)', minWidth:"700px",transformOrigin: 'center' }}>
                      {index === 0 ? (
                        <Heartbeat />
                      ) : (
                        <HeartbeatBP />
                      )}
                    </div>
                  </div>
            <div
          style={{ width: "20%", minWidth: "180px" }}
          className="bg-white shadow rounded p-3 d-flex align-items-center gap-3 graphonetext"
         >
          {index === 0 ? (
            <FaHeart className="text-danger heartbeat-icon" size={60} />
          ) : (
            <FaHeartPulse className="text-danger heartbeat-icon" size={60} />
          )}
          <div>
            <p className="mb-1" style={{ color: "#1E3E6D" }}>
              {index === 0 ? "HEART RATE" : "BLOOD PRESSURE"}
            </p>
            <h5 className="m-0" style={{ color: "#1E3E6D" }}>
              {index === 0 ? "70 BPM" : "120 / 80"}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

                      </div>
                    )}

                  </div>
                </div>
              </div>
            );
          }

export default Monitoring;