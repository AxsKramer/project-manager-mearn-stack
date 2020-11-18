import React, {Fragment} from 'react';
import Task from './Task';

const ListTasks = () => {

  const tasksProject = [
    {name: 'Elegir Plataforma', state: true},
    {name: 'Elegir Colores', state: false},
    {name: 'Elegir Plataforma de pago', state: false},
    {name: 'Elegir Plataforma', state: true},
  ]

  return ( 
    <Fragment>
      <h2>Project: Tienda Virtual</h2>
      <ul className='listado-tareas'>
        {
          tasksProject.length 
            ? tasksProject.map(task => <Task task={task} />) 
            : <li className='tarea'><p>No tasks</p></li>
        }
      </ul>
      <button type='button' className='btn btn-eliminar'>Delete Proyect &times;</button>
    </Fragment>
  );
}
 
export default ListTasks;