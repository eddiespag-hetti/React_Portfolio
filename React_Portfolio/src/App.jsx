
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from 'react-router-dom';




// App() returns Portfolio component -think of this as the body tag
const App = () => {



  return (
    <>
< Navbar />
<div className="container">
< Hero />
</div>
<div className="container">
< About />
</div>
<div className="container">
< Footer />
</div>
    </>
  );
}
   



 


export default App
