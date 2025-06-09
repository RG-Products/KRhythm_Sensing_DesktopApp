import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero_Page from './contents/Hero_Page/Hero_Page';
import Signup from './contents/Signup/Signup';
import Signin from './contents/Signin/Signin';
import ForgetPassword from './contents/ForgetPassword/ForgetPassword';
import ScanandConnect from './contents/ScanandConnect/ScanandConnect';
import BLEDevices from './contents/BleDevice/BleDevice';
import Available from './contents/Available/Available';
import Connecting from './contents/Connecting/Connecting';
import Monitoring from './contents/Monitoring/Monitoring';
import './styles.css';
export default function WelcomeKit() {
  // useFocusOnRouteChange();
  return (
    <div className="welcome-content">
      <Router>
      <Routes>
        <Route path="/" element={<Hero_Page />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot" element={<ForgetPassword/>}/>
        <Route path="/scan" element={<ScanandConnect />} />
        <Route path="/bledevice" element={<BLEDevices />} />
        <Route path="/available" element={<Available />} />
        <Route path="/connecting" element={<Connecting/>}/>
        <Route path="/Monitoring" element={<Monitoring/>}/> 
      </Routes>
      </Router>
    </div>
  )
}
