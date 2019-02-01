/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios'

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHING_SMURFS_SUCCESSFUL = 'FETCHING_SMURFS_SUCCESSFUL';
export const FETCHING_SMURFS_FAILED = 'FETCHING_SMURFS_FAILED';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDING_SMURF_SUCCESSFUL = 'ADDING_SMURF_SUCCESSFUL';
export const ADDING_SMURF_FAILED = 'ADDING_SMURF_FAILED';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const UPDATING_SMURF_SUCCESSFUL = 'UPDATING_SMURF_SUCCESSFUL';
export const UPDATING_SMURF_FAILED = 'UPDATING_SMURF_FAILED';
export const DELETING_SMURF = 'DELETING_SMURF';
export const DELETING_SMURF_SUCCESSFUL = 'DELETING_SMURF_SUCCESSFUL';
export const DELETING_SMURF_FAILED = 'DELETING_SMURF_FAILED';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS })
  axios.get('http://localhost:3333/smurfs')
}