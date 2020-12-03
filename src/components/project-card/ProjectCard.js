import React from 'react';
import { useHistory } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ proj }) {

  const history = useHistory();

  const handleDetailsBtn = (e) => {
    e.preventDefault();
    history.push(`/project/${proj.id}`);
  };

  return (
    <div key={ proj.id } className="card shadow-sm p-3 bg-white rounded">
      <div className="card-body">
      <h6 className="card-subtitle">{ proj.name }</h6>
      </div>
      <div className="img-wrapper">
        <img src={ proj.images[0] } alt="img"/>  
      </div>
      <div className="details border border-secondary">
        <button onClick={ handleDetailsBtn } className="btn btn-primary">Details</button>
      </div>
    </div>    
  )
}

export default ProjectCard
