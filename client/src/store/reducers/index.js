import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import { createBrowserHistory } from 'history'

/* import main reducer load sync */
import auth from './auth'
import { ACTIONS } from '_constants'
const initialState = {
  loading: false
}

const root = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOADING:
      return { ...state, loading: action.payload }
    default:
      return state
  }
}

const history = createBrowserHistory()
const reducers = combineReducers({
  router: connectRouter(history),
  root,
  auth,
})

export default reducers
