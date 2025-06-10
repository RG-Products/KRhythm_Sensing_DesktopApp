import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './BackButton.css'; 

const BackButton = ({ to = -1, label = "Back" }) => {
  const navigate = useNavigate();

  return (
    <button
      className="btn back-button position-absolute top-0 start-0 m-4 d-flex align-items-center gap-2"
      onClick={() => navigate(to)}
    >
      <FaArrowLeft />
      {label}
    </button>
  );
};

export default BackButton;
