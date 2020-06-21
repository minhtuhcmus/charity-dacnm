import API from '.'

const login = payload => API.post('/api/login', payload)

const logout = () => API.post('/api/logout')

export default {
  login,
  logout
}