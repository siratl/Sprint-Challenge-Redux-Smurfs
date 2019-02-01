/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  FETCHING_SMURFS,
  FETCHING_SMURFS_SUCCESSFUL,
  FETCHING_SMURFS_FAILED,
  ADDING_SMURF,
  ADDING_SMURF_SUCCESSFUL,
  ADDING_SMURF_FAILED,
  UPDATING_SMURF,
  UPDATING_SMURF_SUCCESSFUL,
  UPDATING_SMURF_FAILED,
  DELETING_SMURF,
  DELETING_SMURF_SUCCESSFUL,
  DELETING_SMURF_FAILED,
} from '../actions';

const initialState = {
  smurfs: [],

  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

function reducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        smurfs: [],
        fetchingSmurfs: true,
        error: null,
      };
    case FETCHING_SMURFS_SUCCESSFUL:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: null,
      };
    case FETCHING_SMURFS_FAILED:
      return {
        ...state,
        smurfs: [],
        fetchingSmurfs: false,
        error: action.payload,
      };
    case ADDING_SMURF:
      return {
        ...state,
        smurfs: [],
        addingSmurf: true,
        error: null,
      };
    case ADDING_SMURF_SUCCESSFUL:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false,
        error: null,
      };
    case ADDING_SMURF_FAILED:
      return {
        ...state,
        smurfs: [],
        addingSmurf: false,
        error: action.payload,
      };

    case UPDATING_SMURF:
      return {
        ...state,
        smurfs: [],
        updatingSmurf: true,
        error: null,
      };
    case UPDATING_SMURF_SUCCESSFUL:
      return {
        ...state,
        smurfs: action.payload,
        updatingSmurf: false,
        error: null,
      };
    case UPDATING_SMURF_FAILED:
      return {
        ...state,
        smurfs: [],
        updatingSmurf: false,
        error: action.payload,
      };
    case DELETING_SMURF:
      return {
        ...state,
        smurfs: [],
        deletingSmurf: true,
        error: null,
      };
    case DELETING_SMURF_SUCCESSFUL:
      return {
        ...state,
        smurfs: action.payload,
        deletingSmurf: false,
        error: null,
      };
    case DELETING_SMURF_FAILED:
      return {
        ...state,
        smurfs: [],
        deletingSmurf: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
