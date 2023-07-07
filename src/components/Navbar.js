import './NavbarStyles.css'
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png';
function Navbar() {
    return (
      <div className="Navbar" style={{ display: 'flex', alignItems: 'center' }}>
        <div>
            <Link to={'/'}>
                <img src={logo} alt="Logo" style={{ height: '60px' }} />
            </Link>
        </div>
        <ul style={{ listStyleType: 'none', margin: '0', padding: '0', marginLeft: 'auto' }}>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/projects'}>Projects</Link>
            </li>
            <li>
                <Link to={'/travel'}>Travel</Link>
            </li>
            <li>
                <Link to={'/aboutme'}>About Me</Link>
            </li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;
  