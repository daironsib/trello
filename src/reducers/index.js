import { ADD_TASK, DELETE_TASK, EDIT_TASK, CHANGE_STATUS_TASK, DELETE_LIST } from '../actions'

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      let data = state.map(list => {
        if (list.id === action.listID) {
          list.tasks.push(
            {
              completed: false,
              id: action.id,
              title: '',
              taskEditing: true
            }
          )
        }
        return list
      })

      return data

    case DELETE_TASK:
      let deleteData = state.map(list => {
        if (list.tasks.length !== 0) {
          let newTasks = list.tasks.filter(task => task.id !== action.id)
          list.tasks = newTasks
        }

        return list
      })

      return deleteData

    case EDIT_TASK:

      return []

    case CHANGE_STATUS_TASK:
      let changeData = state.map(list => {
        if (list.tasks.length !== 0) {
          list.tasks.forEach(task => {
            if (task.id === action.id) {
              task.completed = !task.completed
            }
          })
        }

        return list
      })

      return changeData

    case DELETE_LIST:
      let yes = window.confirm('Do you want to delete this list?')
      if (yes) {
        let deleteListData = state.filter(list => list.id !== action.id)
        return deleteListData
      }

    default:
      return state
  }
}