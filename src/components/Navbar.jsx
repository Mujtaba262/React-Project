import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <ul className="navbar-left">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
                About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
                Contact
            </Link>
          </li>
        </ul>

        <div className="navbar-brand">
          Mujtaba's App
        </div>

        <div className="navbar-right">
          <Link to="/" className="nav-button nav-button-secondary">
            Sign in
          </Link>
          <Link to="/About" className="nav-button nav-button-primary">
            See a demo
          </Link>
        </div>
      </div>
    </nav>
  );
}