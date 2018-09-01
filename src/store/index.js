import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
import reducer from '../reducers/index'
import thunk from 'redux-thunk'
import { request } from '../utils/request'

export async function createStore () {
  const response = await request('GET', `api/trello`)
  const state = await response.json()

  return reduxCreateStore(reducer, state, applyMiddleware(thunk))
}