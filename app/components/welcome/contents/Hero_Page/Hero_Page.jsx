import { useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.png';
import './Hero_Page.css';

const Hero_Page = () => {
  const navigate = useNavigate();

  const handleUser = () => {
    navigate('/signin'); // Navigates to sign Password page
  };
  return (
    
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="content-box1 text-center p-4 shadow rounded bg-white">

        {/* Logo */}
        <img src={logo} alt="Logo" className="hero-logo1 mb-3 mt-4" />

        {/* Tagline */}
        <p className="small mb-1 mt-4 text1">Your Pulse, Our Intelligence!!!</p>

        {/* Heading */}
        <h5 className=" fw-bold mb-4 mt-5 text2">AI-Enhanced Blood Pressure Insights.</h5>

        {/* Buttons Row */}
        <div className="row px-4 mt-4">
        <div className="col-6 text-start button">
          <button className="btn btn-success w-100" style={{ backgroundColor: '#10b1a7', color: 'white' , border :'3px solid white' }}>Admin</button>
        </div>
        <div className="col-6 text-end button">
          <button className="btn btn-success w-100" style={{ backgroundColor: '#10b1a7', color: 'white', border :'3px solid white',cursor: 'pointer' }} onClick={handleUser}>User</button>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Hero_Page;