import reducer from './reducers/'
import {
  ADD_BOARD,
  ADD_LIST,
  ADD_TASK, CHANGE_STATUS_TASK,
  DELETE_BOARD,
  DELETE_LIST, DELETE_TASK,
  EDIT_BOARD,
  EDIT_LIST, EDIT_TASK,
  SAVE_BOARD,
  SAVE_LIST, SAVE_TASK
} from './actions'
import { generate_id } from './utils/generateID'

const initialState = {
  'boards': [
    {
      'id': 1,
      'title': 'Board Task Lists 1',
      'boardEditing': false
    },
    {
      'id': 2,
      'title': 'Board Task Lists 2',
      'boardEditing': false
    }
  ],
  'lists': [
    {
      'id': 1,
      'title': 'List 1',
      'listEditing': false,
      'boardId': 1
    },
    {
      'id': 2,
      'title': 'List 2',
      'listEditing': false,
      'boardId': 1
    },
    {
      'id': 3,
      'title': 'List 3',
      'listEditing': false,
      'boardId': 2
    }
  ],
  'tasks': [
    {
      'id': 1,
      'listId': 1,
      'title': 'Learn JavaScript',
      'completed': true,
      'taskEditing': false
    },
    {
      'id': 2,
      'listId': 1,
      'title': 'Learn React',
      'completed': false,
      'taskEditing': false
    },
    {
      'id': 3,
      'listId': 1,
      'title': 'Learn Redux',
      'completed': false,
      'taskEditing': false
    },
    {
      'id': 4,
      'listId': 1,
      'title': 'Develop the application',
      'completed': false,
      'taskEditing': false
    },
    {
      'id': 5,
      'listId': 2,
      'title': 'Learn English',
      'completed': true,
      'taskEditing': false
    },
    {
      'id': 6,
      'listId': 2,
      'title': 'Learn Spanish',
      'completed': false,
      'taskEditing': false
    },
    {
      'id': 7,
      'listId': 2,
      'title': 'Learn French',
      'completed': false,
      'taskEditing': false
    },
    {
      'id': 8,
      'listId': 2,
      'title': 'Learn Japanies',
      'completed': false,
      'taskEditing': false
    },
    {
      'id': 9,
      'listId': 3,
      'title': 'Visit to Warszaw',
      'completed': true,
      'taskEditing': false
    },
    {
      'id': 10,
      'listId': 3,
      'title': 'Visit to Prague',
      'completed': false,
      'taskEditing': false
    },
    {
      'id': 11,
      'listId': 3,
      'title': 'Visit to London',
      'completed': false,
      'taskEditing': false
    },
    {
      'id': 12,
      'listId': 3,
      'title': 'Visit to New York',
      'completed': false,
      'taskEditing': false
    }
  ]
}

describe('Board Reducers', () => {
  it('ADD_BOARD', () => {
    const action = {
      type: ADD_BOARD,
      board: {
        id: generate_id(),
        title: `New Board`,
        boardEditing: false
      }
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      boards: [...initialState.boards, action.board]
    })
  })

  it('EDIT_BOARD', () => {
    const action = {
      type: EDIT_BOARD,
      id: 1
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      boards: [
        {id: 1, title: 'Board Task Lists 1', boardEditing: true},
        {id: 2, title: 'Board Task Lists 2', boardEditing: false}
      ]
    })
  })

  it('SAVE_BOARD', () => {
    const action = {
      type: SAVE_BOARD,
      id: 2,
      title: 'New Title'
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      boards: [
        {id: 1, title: 'Board Task Lists 1', boardEditing: false},
        {id: 2, title: 'New Title', boardEditing: false}
      ]
    })
  })

  it('DELETE_BOARD', () => {
    const action = {
      type: DELETE_BOARD,
      id: 2
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      boards: [
        {id: 1, title: 'Board Task Lists 1', boardEditing: false}
      ]
    })
  })
})

describe('List Reducers', () => {
  it('ADD_LIST', () => {
    const action = {
      type: ADD_LIST,
      list: {
        id: generate_id(),
        title: 'Test List',
        listEditing: true,
        boardId: 1
      }
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      lists: [...initialState.lists, action.list]
    })
  })

  it('DELETE_LIST', () => {
    const action = {
      type: DELETE_LIST,
      id: 2
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      lists: [
        {
          'id': 1,
          'title': 'List 1',
          'listEditing': false,
          'boardId': 1
        },
        {
          'id': 3,
          'title': 'List 3',
          'listEditing': false,
          'boardId': 2
        }
      ]
    })
  })

  it('EDIT_LIST', () => {
    const action = {
      type: EDIT_LIST,
      id: 1
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      lists: [
        {
          'id': 1,
          'title': 'List 1',
          'listEditing': true,
          'boardId': 1
        },
        {
          'id': 2,
          'title': 'List 2',
          'listEditing': false,
          'boardId': 1
        },
        {
          'id': 3,
          'title': 'List 3',
          'listEditing': false,
          'boardId': 2
        }
      ]
    })
  })

  it('SAVE_LIST', () => {
    const action = {
      type: SAVE_LIST,
      id: 2,
      title: 'New Title List'
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      lists: [
        {
          'id': 1,
          'title': 'List 1',
          'listEditing': false,
          'boardId': 1
        },
        {
          'id': 2,
          'title': 'New Title List',
          'listEditing': false,
          'boardId': 1
        },
        {
          'id': 3,
          'title': 'List 3',
          'listEditing': false,
          'boardId': 2
        }
      ]
    })
  })
})

describe('Task Reducers', () => {
  it('ADD_TASK', () => {
    const action = {
      type: ADD_TASK,
      task: {
        id: generate_id(),
        listId: 1,
        completed: false,
        taskEditing: true,
        title: 'Test Task'
      }
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      tasks: [...initialState.tasks, action.task]
    })
  })

  it('DELETE_TASK', () => {
    const action = {
      type: DELETE_TASK,
      id: 2
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      tasks: [
        {
          'id': 1,
          'listId': 1,
          'title': 'Learn JavaScript',
          'completed': true,
          'taskEditing': false
        },
        {
          'id': 3,
          'listId': 1,
          'title': 'Learn Redux',
          'completed': false,
          'taskEditing': false
        },
        {
          'id': 4,
          'listId': 1,
          'title': 'Develop the application',
          'completed': false,
          'taskEditing': false
        },
        {
          'id': 5,
          'listId': 2,
          'title': 'Learn English',
          'completed': true,
          'taskEditing': false
        },
        {
          'id': 6,
          'listId': 2,
          'title': 'Learn Spanish',
          'completed': false,
          'taskEditing': false
        },
        {
          'id': 7,
          'listId': 2,
          'title': 'Learn French',
          'completed': false,
          'taskEditing': false
        },
        {
          'id': 8,
          'listId': 2,
          'title': 'Learn Japanies',
          'completed': false,
          'taskEditing': false
        },
        {
          'id': 9,
          'listId': 3,
          'title': 'Visit to Warszaw',
          'completed': true,
          'taskEditing': false
        },
        {
          'id': 10,
          'listId': 3,
          'title': 'Visit to Prague',
          'completed': false,
          'taskEditing': false
        },
        {
          'id': 11,
          'listId': 3,
          'title': 'Visit to London',
          'completed': false,
          'taskEditing': false
        },
        {
          'id': 12,
          'listId': 3,
          'title': 'Visit to New York',
          'completed': false,
          'taskEditing': false
        }
      ]
    })
  })

  it('EDIT_TASK', () => {
    const action = {
      type: EDIT_TASK,
      id: 1
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      tasks: [
        {
          'id': 1,
          'listId': 1,
          'title': 'Learn JavaScript',
          'completed': true,
          'taskEditing': true
        },
        {
          'id': 2,
          'listId': 1,
          'title': 'Learn React',
          'completed': false,
          'taskEditing': false
        },
        {
          'id': 3,
          'listId': 1,
          'title': 'Learn Redux',
          'completed': false,
          'taskEditing': false
        },
        {
          'id': 4,
          'listId': 1,
          'title': 'Develop the application',
          'completed': false,
          'taskEditing': false
        },
        {
          'id': 5,
          'listId': 2,
          'title': 'Learn English',
          'completed': true,
          'taskEditing': false
        },
        {
          'id': 6,
          'listId': 2,
          'title': 'Learn Spanish',
          'completed': false,
          'taskEditing': false
        },
        {
          'id': 7,
          'listId': 2,
          'title': 'Learn French',
          'completed': false,
          'taskEditing': false
        },
        {
          'id': 8,
          'listId': 2,
          'title': 'Learn Japanies',
          'completed': false,
          'taskEditing': false
        },
        {
          'id': 9,
          'listId': 3,
          'title': 'Visit to Warszaw',
          'completed': true,
          'taskEditing': false
        },
        {
          'id': 10,
          'listId': 3,
          'title': 'Visit to Prague',
          'completed': false,
          'taskEditing': false
        },
        {
          'id': 11,
          'listId': 3,
          'title': 'Visit to London',
          'completed': false,
          'taskEditing': false
        },
        {
          'id': 12,
          'listId': 3,
          'title': 'Visit to New York',
          'completed': false,
          'taskEditing': false
        }
      ]
    })
  })

  it('SAVE_TASK', () => {
    const action = {
      type: SAVE_TASK,
      id: 2,
      title: 'New Title Task'
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      tasks: [
        {
          'id': 1,
          'listId': 1,
          'title': 'Learn JavaScript',
          'completed': true,
          'taskEditing': false
        },
        {
          'id': 2,
          'listId': 1,
          'title': 'New Title Task',
          'completed': false,
          'taskEditing': false
        },
        {
          'id': 3,
          'listId': 1,
          'title': 'Learn Redux',
          'completed': false,
          'taskEditing': false
        },
        {
          'id': 4,
          'listId': 1,
          'title': 'Develop the application',
          'completed': false,
          'taskEditing': false
        },
        {
          'id': 5,
          'listId': 2,
          'title': 'Learn English',
          'completed': true,
          'taskEditing': false
        },
        {
          'id': 6,
          'listId': 2,
          'title': 'Learn Spanish',
          'completed': false,
          'taskEditing': false
        },
        {
          'id': 7,
          'listId': 2,
          'title': 'Learn French',
          'completed': false,
          'taskEditing': false
        },
        {
          'id': 8,
          'listId': 2,
          'title': 'Learn Japanies',
          'completed': false,
          'taskEditing': false
        },
        {
          'id': 9,
          'listId': 3,
          'title': 'Visit to Warszaw',
          'completed': true,
          'taskEditing': false
        },
        {
          'id': 10,
          'listId': 3,
          'title': 'Visit to Prague',
          'completed': false,
          'taskEditing': false
        },
        {
          'id': 11,
          'listId': 3,
          'title': 'Visit to London',
          'completed': false,
          'taskEditing': false
        },
        {
          'id': 12,
          'listId': 3,
          'title': 'Visit to New York',
          'completed': false,
          'taskEditing': false
        }
      ]
    })
  })

  it('CHANGE_STATUS_TASK', () => {
    const action = {
      type: CHANGE_STATUS_TASK,
      id: 3
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      tasks: [
      {
        'id': 1,
        'listId': 1,
        'title': 'Learn JavaScript',
        'completed': true,
        'taskEditing': false
      },
      {
        'id': 2,
        'listId': 1,
        'title': 'Learn React',
        'completed': false,
        'taskEditing': false
      },
      {
        'id': 3,
        'listId': 1,
        'title': 'Learn Redux',
        'completed': true,
        'taskEditing': false
      },
      {
        'id': 4,
        'listId': 1,
        'title': 'Develop the application',
        'completed': false,
        'taskEditing': false
      },
      {
        'id': 5,
        'listId': 2,
        'title': 'Learn English',
        'completed': true,
        'taskEditing': false
      },
      {
        'id': 6,
        'listId': 2,
        'title': 'Learn Spanish',
        'completed': false,
        'taskEditing': false
      },
      {
        'id': 7,
        'listId': 2,
        'title': 'Learn French',
        'completed': false,
        'taskEditing': false
      },
      {
        'id': 8,
        'listId': 2,
        'title': 'Learn Japanies',
        'completed': false,
        'taskEditing': false
      },
      {
        'id': 9,
        'listId': 3,
        'title': 'Visit to Warszaw',
        'completed': true,
        'taskEditing': false
      },
      {
        'id': 10,
        'listId': 3,
        'title': 'Visit to Prague',
        'completed': false,
        'taskEditing': false
      },
      {
        'id': 11,
        'listId': 3,
        'title': 'Visit to London',
        'completed': false,
        'taskEditing': false
      },
      {
        'id': 12,
        'listId': 3,
        'title': 'Visit to New York',
        'completed': false,
        'taskEditing': false
      }
    ]
    })
  })
})