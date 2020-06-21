import API from '.'

const getElectionInfo = () => API.get('/candidates')

const vote = payload => API.post('/vote', {candidate_index: payload})

const createElection = payload => API.post('/users/create-election', payload)

export default {
  getElectionInfo,
  vote,
  createElection
}