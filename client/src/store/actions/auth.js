import { ACTIONS } from '_constants'

export const loginSuccess = payload => ({
  type: ACTIONS.LOGIN_SUCCESS,
  payload
})

export const loginFail = payload => ({
  type: ACTIONS.LOGIN_FAIL,
  payload
})

export const logout = () => ({
  type: ACTIONS.LOGOUT
})

export default {
  login,
  logout
}
