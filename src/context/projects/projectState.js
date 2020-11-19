import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {FORM_PROJECT, GET_PROJECTS, ADD_PROJECT, FORM_VALIDATE, CURRENT_PROJECT, DELETE_PROJECT} from '../../types';

const ProjectState = props => {

  const projects = [
    {id: 1, name: 'Tienda Virtual' },
    {id: 2, name: 'Intranet' },
    {id: 3, name: 'Diseño Web' }
  ]

  const initialState = {
    projects: [],
    form: false,
    errorForm: false,
    project: null
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

  const addProject = project => {
    project.id = uuidv4();
    dispatch({
      type: ADD_PROJECT,
      payload: project
    })
  }

  const showError = () => {
    dispatch({
      type: FORM_VALIDATE,
    })
  }

  const projectSelected = projectId => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: projectId
    })
  }

  const deleteProjectById = projectId => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId
    })
  }

  return(
    <projectContext.Provider value={{
      projects: state.projects,
      form: state.form, 
      errorForm: state.errorForm,
      project: state.project,
      showForm,
      getProjects,
      addProject,
      showError,
      projectSelected,
      deleteProjectById
    }}>
      {props.children}
    </projectContext.Provider>
  )
}

export default ProjectState;