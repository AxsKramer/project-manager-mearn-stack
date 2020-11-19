import React, {useContext, useEffect} from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ListProjects = () => {

  const projectsContext = useContext(projectContext);
  const {projects, getProjects} = projectsContext;

  useEffect(() => {
    getProjects()
  }, [])

  if(projects.length === 0) return <p>No projects. Create one.</p>;

  return ( 
    <ul className='listado-projectos'>
      {
        projects && projects.map(project => <Project key={project.id} project={project}/> )
      }
    </ul>
  );
}
 
export default ListProjects;