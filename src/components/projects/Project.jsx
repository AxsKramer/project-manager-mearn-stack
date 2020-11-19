import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const Project = ({project}) => {

  const projectsContext = useContext(projectContext);

  const {projectSelected} = projectsContext;

  return ( 
    <li style={{marginBottom: '1rem'}}>
      <button 
        type='button' 
        className='btn btn-blank' 
        style={{textTransform: 'uppercase'}}
        onClick={() => projectSelected(project.id)}
      >
        {project.name}
      </button>
    </li>
  );
}
 
export default Project;