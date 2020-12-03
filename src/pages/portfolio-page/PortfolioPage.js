import React, { useEffect, useState } from 'react';
import './PortfolioPage.css';
// import DataService from '../../services/DataService';
import { getProjects } from './../../services/DataService';
import ProjectCard from './../../components/project-card/ProjectCard';

export default function PortfolioPage() {
  const [ projects, setProjects ] = useState(null);
  // const [ images, setImages ] = useState(null);

  useEffect(() => {
  
    getProjects().then(res => {
      setProjects(res.projects);
    });

  }, []);

    return (
        <div className="portfolio-page container">
          <div className="row">  
            {projects && projects.map(proj => {
              return (
              
                <ProjectCard key={proj.id} proj={proj} />
                
              )
            })}  
          </div>
        </div>
    )
}
