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
    },
    {
      id: 2,
      title: "Byte Me - Tech Blog",
      description: "A Blog page for all things Tech",
      imageSrc: "./img/tech-blog.png",
    },
    {
      id: 3,
      title: "Weather Forecast",
      description: "5 Day weather forecast web application",
      imageSrc: "./img/weather-app.png",
    },
    {
      id: 4,
      title: "Employee Tracker CLI",
      description: "A CLI application for managing your employees",
      imageSrc: "./img/employee-db.png"
    },
  ];

  return (
    <div className="portfolio-container">
      <h1>Portfolio</h1>
      <div className="project-cards">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;