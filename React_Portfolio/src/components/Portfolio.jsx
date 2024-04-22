

// Create a Portfolio component
function Portfolio() {

        // Array of projects 
      const projects = [
        {
          id: 1,
          title: "SecureScribe",
          description: "A secure online journalling application.",
          image: "./src/img/secure-scribe.png",
          githubLink: "https://github.com/Hyne-OS1/SecureScribe",
         
        },
        {
          id: 2,
          title: "Weather App",
          description: "Description of project 2.",
          image: "./src/img/weather-app.png",
          githubLink: "https://github.com/eddiespag-hetti/Weather_Forecast",
          
        },
        {
            id: 3,
            title: "Employee Tracker DB",
            description: "Description of project 3.",
            image: "./src/img/employee-db.png",
            githubLink: "https://github.com/eddiespag-hetti/EmployeeDB_CLI",
            
          },
          {
            id: 4,
            title: "Tech Blog",
            description: "Description of project 4.",
            image: "./src/img/tech-blog.png",
            githubLink: "https://github.com/eddiespag-hetti/Tech_Blog",
            
          },
    

        // Add more projects as needed
      ]
    ;

  


    return (
      <div>
        <h1>My Portfolio</h1>
        <div className="projects">
          {projects.map(project => (
            <div key={project.id} className="project">
              <img className='project-img' src={project.image} alt={project.title} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }



export default Portfolio;


