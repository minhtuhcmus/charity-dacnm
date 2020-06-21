import { ACTIONS } from '_constants'

export const vote = payload => ({
  type: ACTIONS.VOTE,
  value: payload
})

export const getElection = payload => ({
  type: ACTIONS.GET_ELECTION,
  value: payload
})