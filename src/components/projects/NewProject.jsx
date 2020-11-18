import React, {Fragment, useState, useContext} from 'react';
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {

  //Get state from form
  const projectsContext = useContext(projectContext);
  
  const {form, showForm} = projectsContext;

  const [project, setProject] = useState({name: ''});

  const handleChange = e => setProject({...project, [e.target.name]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
  }

  const {name} = project;

  return ( 
    <Fragment>
      <button onClick={() => showForm()} type='button' className='btn btn-block btn-primario'>
        New Project
      </button>
      {
        form 
          ? (
            <form onSubmit={handleSubmit} className='formulario-nuevo-proyecto' >
              <input 
                type="text"
                className='input-text'
                placeholder= "Project' s Name"
                name= 'name'  
                onChange={handleChange}
                value={name}
              />
              <input type="submit" className='btn btn-primario btn-block'value='Add Project'/>
            </form>
          )
          : null
      }
    </Fragment>
  );
}
 
export default NewProject;