import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

import Footer from "./components/Footer/Footer";

import { Outlet } from "react-router-dom";


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
      
      <div className="container">
        <Footer />
      </div>
    </>
  );
};

export default App;
