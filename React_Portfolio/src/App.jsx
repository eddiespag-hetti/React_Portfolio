import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

import Footer from "./components/Footer/Footer";
import ContactMe from './components/Contact/ContactMe'; 
import { Outlet } from "react-router-dom";
// import Portfolio from './pages/Portfolio'; // Where does Portfolio need to be to be render when the link is clicked?

// App() returns Portfolio component -think of this as the body tag
const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
      </div>

      <div className="container">
        <Outlet />
      </div>
      <div className="container"><ContactMe /></div>
      <div className="container">
        <Footer />
      </div>
    </>
  );
};

export default App;
