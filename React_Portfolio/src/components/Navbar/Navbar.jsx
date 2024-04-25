import './Navbar.css';

const Navbar = () => {



  return (
<>
<nav className="nav-wrapper">
  <div className='nav-content'>
    <img className='logo-react' src="./img/react-color.svg" />
    <h1 className='title'>Edward Payne</h1>
    <h4 className='sub-title'>Coding Bootcamp Student</h4>
    <ul>
      <li>
        <a className='menu-item'>Home</a>
      </li>
      <li>
        <a className='menu-item'>Skills</a>
      </li>
      <li>
        <a className='menu-item'>Portfolio</a>
      </li>
  
      <button className='contact-btn' onClick={() => {}}>Contact Me</button>
    </ul>


  </div>
</nav>
</>
  );
}


export default Navbar;


