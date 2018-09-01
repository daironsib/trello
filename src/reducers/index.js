import { combineReducers } from 'redux'
import boardReducers from './boardReducers'
import listReducers from './listReducers'
import taskReducers from './taskReducers'

export default combineReducers({
  boards: boardReducers,
  lists: listReducers,
  tasks: taskReducers
})