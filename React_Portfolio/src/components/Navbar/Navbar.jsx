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
              <Link
                to="/Skills"
                className={currentPage === "/" ? "nav-link active" : "nav-link"}
                id="menu-item"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/Portfolio"
                className={currentPage === "/" ? "nav-link active" : "nav-link"}
                id="menu-item"
              >
                Portfolio
              </Link>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              Contact Me
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
