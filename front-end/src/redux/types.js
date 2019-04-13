import keyMirror from 'keymirror';

export default keyMirror({
  OPEN_MODAL: null,
  CLOSE_MODAL: null,
  OPEN_DROPDOWN: null,
  CLOSE_DROPDOWN: null,
});

// Auth
export const USER_LOG_IN = 'USER_LOG_IN';
export const USER_SIGN_OUT = 'USER_SIGN_OUT';

// Loader
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';

// Notifications
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const INITIALIZE_NOTIFICATION = 'INITIALIZE_NOTIFICATION';

// Users
export const FETCH_USERS = 'FETCH_USERS';
export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';
export const SET_EDITING_USER = 'SET_EDITING_USER';
export const SET_DELETING_USER = 'SET_DELETING_USER';
export const SET_USER_VIEW_CONFIG = 'SET_USER_VIEW_CONFIG';
export const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';
export const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER';
export const SET_LOGGED_IN_USER_USERNAME = 'SET_LOGGED_IN_USER_USERNAME';