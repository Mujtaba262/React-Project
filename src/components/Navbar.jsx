import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaUser, FaArrowRight } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <ul className="navbar-left">
          <li>
            <Link to="/" className="nav-link">
              <FaHome className="nav-icon" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              <FaInfoCircle className="nav-icon" />
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              <FaEnvelope className="nav-icon" />
              Contact
            </Link>
          </li>
        </ul>

        <div className="navbar-brand">
          Mujtaba's App
        </div>

        <div className="navbar-right">
          <Link to="/" className="nav-button nav-button-secondary">
            <FaUser className="nav-icon" />
            Sign in
          </Link>
          <Link to="/About" className="nav-button nav-button-primary">
            See a demo
            <FaArrowRight className="nav-icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
}