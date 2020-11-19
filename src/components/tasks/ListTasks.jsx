import React, {Fragment, useContext} from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';

const ListTasks = () => {

  const projectsContext = useContext(projectContext);
  
  const {project, deleteProjectById} = projectsContext;

  if(!project){
    return <h2>Choose a project</h2>
  }

  const [currentProject] = project;

  const tasksProject = [
    {name: 'Elegir Plataforma', state: true},
    {name: 'Elegir Colores', state: false},
    {name: 'Elegir Plataforma de pago', state: false},
    {name: 'Elegir Plataforma', state: true},
  ]

  return ( 
    <Fragment>
      <h2>Project: {currentProject.name}</h2>
      <ul className='listado-tareas'>
        {
          tasksProject.length 
            ? tasksProject.map(task => <Task task={task} />) 
            : <li className='tarea'><p>No tasks</p></li>
        }
      </ul>
      <button 
        type='button' 
        className='btn btn-eliminar'
        onClick={() => deleteProjectById(currentProject.id)}
      >
        Delete Proyect &times;
      </button>
    </Fragment>
  );
}
 
export default ListTasks;