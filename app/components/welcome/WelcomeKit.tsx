import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// Lazy load all route components
// This setup only loads the specific page when the user navigates to that route — reducing initial load time and memory.
const Hero_Page = lazy(() => import('./contents/Hero_Page/Hero_Page'));
const Signup = lazy(() => import('./contents/SignUp/Signup'));
const Signin = lazy(() => import('./contents/Signin/Signin'));
const ForgetPassword = lazy(() => import('./contents/Forgetpassword/ForgetPassword'));
const ScanandConnect = lazy(() => import('./contents/ScanandConnect/ScanandConnect'));
const BLEDevices = lazy(() => import('./contents/BleDevice/BleDevice'));
const Available = lazy(() => import('./contents/Available/Available'));
const Connecting = lazy(() => import('./contents/Connecting/Connecting'));
const Monitoring = lazy(() => import('./contents/Monitoring/Monitoring'));

export default function WelcomeKit() {
  return ( 
    <div className="welcome-content">
      <Router>
        <Suspense fallback={<div className="text-center mt-5 text-light bg-white">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Hero_Page />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/forgot" element={<ForgetPassword />} />
            <Route path="/scan" element={<ScanandConnect />} />
            <Route path="/bledevice" element={<BLEDevices />} />
            <Route path="/available" element={<Available />} />
            <Route path="/connecting" element={<Connecting />} />
            <Route path="/monitoring" element={<Monitoring />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}
