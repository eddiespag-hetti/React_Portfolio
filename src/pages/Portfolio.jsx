import '../components/Portfolio/Portfolio.css';
import ProjectCard from "../components/Portfolio/ProjectCard";

const Portfolio = () => {
  // Array of Projects in Portfolio
  const projects = [
    {
      id: 1,
      title: "Secure Scribe",
      description: "A Secure Online Journalling Application",
      imageSrc: "./img/secure-scribe.png",
     link: "https://secure-gorge-83546-fd710447ff28.herokuapp.com/",
    },
    {
      id: 2,
      title: "Byte Me - Tech Blog",
      description: "A Blog page for all things Tech",
      imageSrc: "./img/tech-blog.png",
      link: "https://byteme-techblog-261fe561b9ad.herokuapp.com/"
    },
    {
      id: 3,
      title: "Weather Forecast",
      description: "5 Day weather forecast web application",
      imageSrc: "./img/weather-app.png",
      link: "https://eddiespag-hetti.github.io/Weather_Forecast/"
    },
    {
      id: 4,
      title: "Employee Tracker CLI",
      description: "A CLI application for managing your employees",
      imageSrc: "./img/employee-db.png",
      link: "https://github.com/eddiespag-hetti/EmployeeDB_CLI"
    },
  ];

  return (
    <div className="portfolio-container">
      <h1 className='portfolio-heading'>Portfolio</h1>
      <div className="project-cards">
      <p className='port-para'>Here is what I have been working on</p>
        <div className="row">
          {projects.map((project) => (
            <div className="col" key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};


export default Portfolio;