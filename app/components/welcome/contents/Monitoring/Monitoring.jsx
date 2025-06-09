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
const Monitoring = () => {
  const [graphOption, setGraphOption] = useState(1);
  const [showGraph, setShowGraph] = useState(false);
  const navigate = useNavigate();
//   const handleStart = () => setShowGraph(true);
//   const handleStop = () => setShowGraph(false);
  const [resetSignal, setResetSignal] = useState(false);
  
    const handleStart = () => {
    setShowGraph(true);
    setResetSignal(false); // clear reset
    };

    const handleStop = () => {
    setShowGraph(false);
    };

    const handleReset = () => {
    setShowGraph(false);     // Hide the graph
    setResetSignal(true);    // Trigger reset flag
    setTimeout(() => {
        setShowGraph(true);    // Optionally re-show graph after reset
        setResetSignal(false); // Clear flag
    }, 100); // small delay to ensure component resets
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

          <div className="d-flex flex-column align-items-center gap-5">
            <FaHome size={40} style={iconStyleWhite} onClick={() => navigate('/')} />
            <FaUserInjured size={40} style={iconStyleWhite} />
            <FaCog size={40} style={iconStyleWhite} />
            <FaQuestionCircle size={40} style={iconStyleWhite} />
          </div>
        </div>

        <div className="col-md-10 p-4 maintitle">
          <div className="d-flex align-items-center gap-3 mb-4 flex-nowrap">
            <button className="btn Monitorbutton ms-auto" onClick={handleStart}
              style={{ backgroundColor: '#10b1a7', color: 'white', border: '2px solid white', width: '120px' }}>Start</button>

            <button className="btn Monitorbutton ms-auto" onClick={handleStop}
              style={{ backgroundColor: '#10b1a7', color: 'white', border: '2px solid white', width: '120px' }}>Stop</button>

            <div className="d-flex align-items-center gap-2 blClass">
              <FaBluetooth />
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
              title="Monitoring Option" variant="bg-outline-light"
              style={{ width: '180px', height: '48px', fontSize: '1.1rem', padding: '5px 3px' }}>
              <Dropdown.Item onClick={() => setGraphOption(1)}>Heart Rate</Dropdown.Item>
              <Dropdown.Item onClick={() => setGraphOption(2)}>Blood Pressure</Dropdown.Item>
              <Dropdown.Item onClick={() => setGraphOption(3)}>All</Dropdown.Item>
            </DropdownButton>
     
            <FaDownload size={24} className="download" />
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
                    <FaHeart className="text-danger" size={70} />
                    <div>
                      <p className="mb-1" style={{ color: "#1E3E6D" }}>Heartt Rate</p>
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
                    <FaHeartPulse className="text-danger" size={70} />
                    <div>
                      <p className="mb-1" style={{ color: "#1E3E6D" }}>BLOOD PRESSURE</p>
                      <h5 className="m-0" style={{ color: "#1E3E6D" }}>120 / 80</h5>
                    </div>
                  </div>
                </div>
              )}

              {graphOption === 3 && (
  <div className="d-flex flex-column gap-3">
    {[1, 2].map((_, index) => (
      <div key={index} className="d-flex flex-row graphonethree" style={{ flex: 1 }}>
        <div
            className="flex-grow-1 rounded p-3 me-3 d-flex align-items-center justify-content-center invisible-scrollbar"
            style={{ height: "200px", overflowY: "auto" }}
            >
          <div className="w-100 h-100">
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
            <FaHeart className="text-danger" size={60} />
          ) : (
            <FaHeartPulse className="text-danger" size={60} />
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