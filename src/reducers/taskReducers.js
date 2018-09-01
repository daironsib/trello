import { ADD_TASK, DELETE_TASK, EDIT_TASK, SAVE_TASK, CHANGE_STATUS_TASK } from '../actions'

export default function task (state = [], action) {
  switch (action.type) {

    case ADD_TASK:
      return [
        ...state,
        action.task
      ]

    case DELETE_TASK:
      const deleteIndex = state.findIndex(task => task.id === action.id)

      return [
        ...state.slice(0, deleteIndex),
        ...state.slice(deleteIndex + 1)
      ]

    case EDIT_TASK:
      const editedTasks = state.map(task => {
        if (task.id !== action.id) {
          return task
        }

        return Object.assign({}, task, {
          taskEditing: true
        })
      })

      return [...editedTasks]

    case SAVE_TASK:
      const saveTasks = state.map(task => {
        if (task.id !== action.id) {
          return task
        }

        return Object.assign({}, task, {
          title: action.title,
          taskEditing: false
        })
      })

      return [...saveTasks]

    case CHANGE_STATUS_TASK:
      const changeStatusTasks = state.map(task => {
        if (task.id !== action.id) {
          return task
        }

        return Object.assign({}, task, {
          completed: !task.completed
        })
      })

      return [...changeStatusTasks]

    default:
      return state
  }
}
