import API from '.'

const getUserInfo = id => API.get(`/api/user/${id}`)

const vote = payload => API.post('/api/vote/', payload)