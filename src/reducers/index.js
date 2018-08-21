import { ADD_TASK, DELETE_TASK, EDIT_TASK, CHANGE_STATUS_TASK, DELETE_LIST } from '../actions'

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      let data = state
      data.tasks.push({
        id: action.id,
        listId: action.listID,
        completed: false,
        taskEditing: false,
        title: ''
      })
      console.log(data)
      return data

    case DELETE_TASK:
      let deleteData = state
      deleteData.tasks = deleteData.tasks.filter(task => task.id !== action.id)

      console.log(deleteData)
      return deleteData

    case EDIT_TASK:

      return []

    case CHANGE_STATUS_TASK:
      let changeData = state
      changeData.tasks.forEach(task => {
        if (task.id === action.id) {
          task.completed = !task.completed
        }
      })

      console.log(changeData)
      return changeData

    case DELETE_LIST:
      let deleteListData = state
      deleteListData.lists = deleteListData.lists.filter(list => list.id !== action.id)
      console.log(deleteListData)
      return deleteListData

    default:
      return state
  }
}