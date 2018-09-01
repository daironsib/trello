import { ADD_BOARD, DELETE_BOARD, EDIT_BOARD, SAVE_BOARD } from '../actions'

export default function board (state = [], action) {
  switch (action.type) {

    case ADD_BOARD:
      return [
        ...state,
        action.board
      ]

    case EDIT_BOARD:
      const editedBoard = state.map(board => {
        if (board.id !== action.id) {
          return board
        }

        return Object.assign({}, board, {
          boardEditing: true
        })
      })

      return [...editedBoard]

    case SAVE_BOARD:
      const saveBoards = state.map(board => {
        if (board.id !== action.id) {
          return board
        }

        return Object.assign({}, board, {
          title: action.title,
          boardEditing: false
        })
      })

      return [...saveBoards]

    case DELETE_BOARD:
      const deleteBoardIndex = state.findIndex(board => board.id === action.id)

      return [
        ...state.slice(0, deleteBoardIndex),
        ...state.slice(deleteBoardIndex + 1)
      ]

    default:
      return state
  }
}