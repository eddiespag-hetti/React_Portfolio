

import './ProjectCard.css';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, imageSrc, link }) => {
  return (
    <div className="project-card">
      <Link to={link} target="_blank" rel="noreferrer">
        <img className="project-img" src={imageSrc} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default ProjectCard;

