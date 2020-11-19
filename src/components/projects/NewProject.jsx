import React, {Fragment, useState, useContext} from 'react';
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {

  //Get state from form
  const projectsContext = useContext(projectContext);
  
  const {form, errorForm, showForm, addProject, showError } = projectsContext;

  const [project, setProject] = useState({name: ''});
  
  const {name} = project;
  
  const handleChange = e => setProject({...project, [e.target.name]: e.target.value});
  
  const handleSubmit = e => {
    e.preventDefault();
    //Validate project
    if(name === '') {
      showError();
      return;
    }
    
    //add to the state
    addProject(project);

    //reset form
    setProject({name: ''});
  }

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
                name='name'  
                onChange={handleChange}
                value={name}
              />
              <input type="submit" className='btn btn-primario btn-block'value='Add Project'/>
            </form>
          )
          : null
      }
      {errorForm ? <p className='mensaje error'>This field is required</p> : null}
    </Fragment>
  );
}
 
export default NewProject;