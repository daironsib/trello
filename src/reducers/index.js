import { GET_DATA, ADD_BOARD, DELETE_BOARD, EDIT_BOARD, SAVE_BOARD, ADD_TASK, DELETE_TASK, EDIT_TASK, SAVE_TASK, CHANGE_STATUS_TASK, DELETE_LIST, ADD_LIST, EDIT_LIST, SAVE_LIST } from '../actions'

export default function reducer (state = {}, action) {
  switch (action.type) {
    case GET_DATA:
      return action.data

    case ADD_BOARD:
      const boards = [
        ...state.boards,
        action.board
      ]

      return {...state, boards}

    case EDIT_BOARD:
      const editedBoard = state.boards.map(board => {
        if (board.id !== action.id) {
          return board
        }

        return Object.assign({}, board, {
          boardEditing: true
        })
      })

      return {...state, boards: [...editedBoard]}

    case SAVE_BOARD:
      const saveBoards = state.boards.map(board => {
        if (board.id !== action.id) {
          return board
        }

        return Object.assign({}, board, {
          title: action.title,
          boardEditing: false
        })
      })

      return {...state, boards: [...saveBoards]}

    case DELETE_BOARD:
      const deleteBoardIndex = state.boards.findIndex(board => board.id === action.id)

      return {
        boards: [
          ...state.boards.slice(0, deleteBoardIndex),
          ...state.boards.slice(deleteBoardIndex + 1)
        ],
        lists: state.lists,
        tasks: state.tasks
      }


    case ADD_TASK:
      const tasks = [
        ...state.tasks,
        action.task
      ]

      return {...state, tasks}
    case DELETE_TASK:
      const deleteIndex = state.tasks.findIndex(task => task.id === action.id)

      return {
        lists: state.lists,
        tasks: [
          ...state.tasks.slice(0, deleteIndex),
          ...state.tasks.slice(deleteIndex + 1)
        ]
      }

    case EDIT_TASK:
      const editedTasks = state.tasks.map(task => {
          if (task.id !== action.id) {
            return task
          }

          return Object.assign({}, task, {
            taskEditing: true
          })
        })

      return {...state, tasks: [...editedTasks]}

    case SAVE_TASK:
      const saveTasks = state.tasks.map(task => {
        if (task.id !== action.id) {
          return task
        }

        return Object.assign({}, task, {
          title: action.title,
          taskEditing: false
        })
      })

      return {...state, tasks: [...saveTasks]}

    case CHANGE_STATUS_TASK:
      const changeStatusTasks = state.tasks.map(task => {
        if (task.id !== action.id) {
          return task
        }

        return Object.assign({}, task, {
          completed: !task.completed
        })
      })

      return {...state, tasks: [...changeStatusTasks]}

    case DELETE_LIST:
      const deleteListIndex = state.lists.findIndex(list => list.id === action.id)

      return {
        boards: state.boards,
        lists: [
          ...state.lists.slice(0, deleteListIndex),
          ...state.lists.slice(deleteListIndex + 1)
        ],
        tasks: state.tasks
      }

    case ADD_LIST:
      const lists = [
        ...state.lists,
        action.list
      ]

      return {...state, lists}

    case EDIT_LIST:
      const editedLists = state.lists.map(list => {
        if (list.id !== action.id) {
          return list
        }

        return Object.assign({}, list, {
          listEditing: true
        })
      })

      return {...state, lists: [...editedLists]}

    case SAVE_LIST:
      const saveLists = state.lists.map(list => {
        if (list.id !== action.id) {
          return list
        }

        return Object.assign({}, list, {
          title: action.title,
          listEditing: false
        })
      })

      return {...state, lists: [...saveLists]}

    default:
      return state
  }
}
