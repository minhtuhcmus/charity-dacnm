import { ACTIONS } from '_constants'
import axios from 'axios'

const initState = {
  user: null,
  authError: null
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_SUCCESS:
      axios.defaults.headers.common.authorization = `Bearer ${action.payload.token}`
      state = {
        ...state,
        user: action.payload.user
      }
      break
    case ACTIONS.LOGIN_FAIL:
      state = {
        ...state,
        authError: action.payload
      }
      break
    case ACTIONS.LOGOUT:
      axios.defaults.headers.common.authorization = null
      state = {
        ...state
      }
      break
    default:
      return state
  }
  return state
}

export default reducer

