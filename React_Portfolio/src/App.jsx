import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";


// App() returns Portfolio component -think of this as the body tag
const App = () => {



  return (
    <>
< Navbar />
<div className="container">
< Hero />
</div>
    </>
  );
}
   



 


export default App
