// Importing relevent CSS styling
import './Hero.css'

// Hero Component
const Hero = () => {
    return (
<section className='hero-container'>
  <div className='hero-content'>
    <div className='text-content'>
      <h2>Building Digital Experiences That Inspire</h2>
      <p>Passionate Full-Stack Developer | Transforming Ideas into Code</p>
    </div>
    <div className='tech-icons'>
      <div className='tech-icon'>
        <img src="./img/javascript.svg" alt='JavaScript icon' />
      </div>
      <div className='tech-icon'>
        <img src="./img/vite.svg" alt='Vite icon' />
      </div>
      <div className='tech-icon'>
        <img src="./img/html5.svg" alt='HTML5 icon' />
      </div>
      <div className='tech-icon'>
        <img src="./img/nodedotjs.svg" alt='Node.js icon' />
      </div>
      <div className='tech-icon'>
        <img src="./img/css3.svg" alt='CSS3 icon' />
      </div>
    </div>
  </div>
  <div className='hero-img'>
    <img className="hero-img" src="./img/hero-img.png" alt='Image of a developers workspace' />
  </div>
</section>


  
        
      
  


)
};

export default Hero;