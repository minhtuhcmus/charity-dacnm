export const API_METHOD = {
  SERVER_URL: 'http://localhost:8000/',
  METHOD_GET: 'GET',
  METHOD_POST: 'POST',
  METHOD_PUT: 'PUT',
  METHOD_DELETE: 'DELETE'
}

export const PAGE_TYPE = {
  AUTH: 'AUTH',
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC'
}

export const ACTIONS = {
  // general
  LOADING: 'LOADING',
  // auth
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',

  LOGOUT: 'LOGOUT',
  // user
  VOTE: 'VOTE',
  GET_ELECTION: 'GET_ELECTION' 
  
}
