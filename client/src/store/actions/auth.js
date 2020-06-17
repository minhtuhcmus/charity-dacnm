import { ACTIONS } from '_constants'

export const login = payload => ({
  type: ACTIONS.LOGIN,
  value: payload
})

export const logout = () => ({
  type: ACTIONS.LOGOUT
})

export default {
  login,
  logout
}
