import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">My Resume</h1>
      <ul className="nav-menu">
        <li>
          <Link to="/" className="sub-title">
            About
          </Link>
        </li>
        <li>
          <Link to="/education" className="sub-title">
            Education
          </Link>
        </li>
        <li>
          <Link to="/skills" className="sub-title">
            Skills
          </Link>
        </li>
        <li>
          <Link to="/projects" className="sub-title">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/profiles" className="sub-title">
            Profiles
          </Link>
        </li>
        <li>
          <Link to="/contact" className="sub-title">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
