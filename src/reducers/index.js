import { ADD_TASK, DELETE_TASK, EDIT_TASK, CHANGE_STATUS_TASK, DELETE_LIST } from '../actions'

export default function reducer (state = {}, action) {
  switch (action.type) {
    case ADD_TASK:
      const tasks = [
        ...state.tasks,
        {
          id: action.id,
          listId: action.listID,
          completed: false,
          taskEditing: true,
          title: ''
        }
      ]

      return {...state, tasks}
    case DELETE_TASK:
      state.tasks = state.tasks.filter(task => task.id !== action.id)

      return {...state}
    case EDIT_TASK:

      return []

    case CHANGE_STATUS_TASK:
      state.tasks.forEach(task => {
        if (task.id === action.id) {
          task.completed = !task.completed
        }
      })

      return {...state}
    case DELETE_LIST:
      state.lists = state.lists.filter(list => list.id !== action.id)

      return {...state}
    default:
      return state
  }
}
