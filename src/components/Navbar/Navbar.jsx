import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const currentPage = useLocation().pathname;


  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo-react" src="./img/react-color.svg" />
          <h1 className="title">Edward Payne</h1>
          <h4 className="sub-title">Coding Bootcamp Student</h4>
          <ul>
            <li>
              <Link
                to="/"
                className={currentPage === "/" ? "nav-link active" : "nav-link"}
                id="menu-item"
              >
                Home
              </Link>
            </li>
            <li>
              <a href="https://github.com/eddiespag-hetti"
             
                
                id="menu-item"
              >
                Resume
              </a>
            </li>
            <li>
              <Link
                to="/portfolio"
                className={currentPage === "/" ? "nav-link active" : "nav-link"}
                id="menu-item"
              >
                Portfolio
              </Link>
            </li>

            <button className="contact-btn">
              <Link
              
              to="/contact">Contact Me</Link>
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;


