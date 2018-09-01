import { ADD_LIST, DELETE_LIST, EDIT_LIST, SAVE_LIST } from '../actions'

export default function list (state = [], action) {
  switch (action.type) {

    case ADD_LIST:
      return [
        ...state,
        action.list
      ]

    case DELETE_LIST:
      const deleteListIndex = state.findIndex(list => list.id === action.id)

      return [
        ...state.slice(0, deleteListIndex),
        ...state.slice(deleteListIndex + 1)
      ]

    case EDIT_LIST:
      const editedLists = state.map(list => {
        if (list.id !== action.id) {
          return list
        }

        return Object.assign({}, list, {
          listEditing: true
        })
      })

      return [...editedLists]

    case SAVE_LIST:
      const saveLists = state.map(list => {
        if (list.id !== action.id) {
          return list
        }

        return Object.assign({}, list, {
          title: action.title,
          listEditing: false
        })
      })

      return [...saveLists]

    default:
      return state
  }
}
