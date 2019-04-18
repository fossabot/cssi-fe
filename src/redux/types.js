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

// Applications
export const FETCH_APPLICATIONS = 'FETCH_APPLICATIONS';
export const FETCH_APPLICATION_TYPES = 'FETCH_APPLICATION_TYPES';
export const FETCH_APPLICATION_GENRES = 'FETCH_APPLICATION_GENRES';
export const ADD_APPLICATION = 'ADD_APPLICATION';
export const EDIT_APPLICATION = 'EDIT_APPLICATION';
export const DELETE_APPLICATION = 'DELETE_APPLICATION';
export const SET_EDITING_APPLICATION = 'SET_EDITING_APPLICATION';
export const SET_DELETING_APPLICATION = 'SET_DELETING_APPLICATION';
export const SET_SELECTED_APPLICATION = 'SET_SELECTED_APPLICATION';
export const SET_APPLICATION_VIEW_CONFIG = 'SET_APPLICATION_VIEW_CONFIG';
export const UPDATE_APPLICATION_SHARING_STATUS = 'UPDATE_APPLICATION_SHARING_STATUS';

// Sessions
export const SET_SESSION_VIEW_CONFIG = 'SET_SESSION_VIEW_CONFIG';
export const FETCH_QUESTIONNAIRES = 'FETCH_QUESTIONNAIRES';
export const ADD_QUESTIONNAIRE = 'ADD_QUESTIONNAIRE';
export const UPDATE_QUESTIONNAIRE = 'UPDATE_QUESTIONNAIRE';
export const SET_SELECTED_QUESTIONNAIRE = 'SET_SELECTED_QUESTIONNAIRE';
export const SET_EXPECTED_EMOTIONS = 'SET_EXPECTED_EMOTIONS';
export const SET_RAW_PHONE_FEED_WS_URL = 'SET_RAW_PHONE_FEED_WS_URL';
export const SET_RAW_PHONE_FEED_WS_CONNECTION_STATUS = 'SET_RAW_PHONE_FEED_WS_CONNECTION_STATUS';
export const SET_RAW_PHONE_FEED_WS_DATA = 'SET_RAW_PHONE_FEED_WS_DATA';

