import {FORM_PROJECT, GET_PROJECTS} from '../../types';

const projectReducer= (state, action) => {
  switch(action.type){
    case FORM_PROJECT:
      return {
        ...state,
        form: true
      }
    case GET_PROJECTS: 
      return {
        ...state,
        projects: action.payload
      }
    default:
      return state;
  }
}

export default projectReducer;