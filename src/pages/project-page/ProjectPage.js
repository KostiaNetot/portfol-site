import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectPage.css';
import { getProject } from './../../services/DataService';

function ProjectPage() {

  const [project, setProject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProject(id).then(proj => setProject(proj));
  }, []);

  if(project) console.log(project)

    return (
      <div className="project-page row">

        <div className="description-column col-xs-12 col-sm-6">
        { project &&
            <div className="description-wrapper"> 
              <h2>{ project.name }</h2>
              <p>{ project.description }</p> 
              <h6>Technologies used: </h6>
              <div className="bages-wrapper">

                { project.technologies.map((tech, i) => {
                  return <span key={i} className="badge badge-primary">{ tech }</span>
                }) }

              </div>
            </div> 
        }
        </div> 
        
        <div className="screen-column col-xs-12 col-sm-6">

          { project && project.images.map((img, i) => {
            return <img className="proj-screen" key={i} src={`./.${img}`} alt="screen"/>
          }) }

        </div>  

      </div>  
    )
}

export default ProjectPage
