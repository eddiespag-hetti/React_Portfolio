import './ProjectCard.css'

const ProjectCard = ({ title, description, imageSrc }) => {
  return (
    <div className="project-card">
      <img className="project-img" src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href="Github link here"></a>
    </div>
  );
}

export default ProjectCard;
