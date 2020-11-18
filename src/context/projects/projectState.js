import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {FORM_PROJECT, GET_PROJECTS} from '../../types';

const ProjectState = props => {

  const projects = [
    {id: 1, name: 'Tienda Virtual' },
    {id: 2, name: 'Intranet' },
    {id: 3, name: 'Diseño Web' }
  ]

  const initialState = {
    form: false,
    projects: [],
  }

  //Dispath to run actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  //Functions CRUD
  const showForm = () => {
    dispatch({
      type: FORM_PROJECT
    })
  }

  //Get Projects
  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects
    })
  }

  return(
    <projectContext.Provider value={{
      projects: state.projects,
      form: state.form, 
      showForm,
      getProjects
    }}>
      {props.children}
    </projectContext.Provider>
  )
}

export default ProjectState;