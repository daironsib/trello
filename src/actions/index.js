import { request } from '../utils/request'

export const GET_DATA = 'GET_DATA'
export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const EDIT_TASK = 'EDIT_TASK'
export const SAVE_TASK = 'SAVE_TASK'
export const CHANGE_STATUS_TASK = 'CHANGE_STATUS_TASK'
export const DELETE_LIST = 'DELETE_LIST'
export const ADD_LIST = 'ADD_LIST'
export const EDIT_LIST = 'EDIT_LIST'
export const SAVE_LIST = 'SAVE_LIST'

export function getData() {
  return (dispatch) => {
    request('GET', `api/trello`)
      .then(response => response.json())
      .then(data => dispatch({
        type: GET_DATA,
        data
      }))
  }
}

export function addTask(listId) {
  return (dispatch) => {
    request('POST', `api/trello/task`, { listId })
      .then(response => response.json())
      .then(task => dispatch({
        type: ADD_TASK,
        task
      }))
  }
}

export function deleteTask(id) {
  return (dispatch) => {
    request('DELETE', `api/trello/task/${id}`)
      .then(() => dispatch({
        type: DELETE_TASK,
        id
      }))
  }
}

export function saveTask(id, title) {
  return (dispatch) => {
    request('PUT', `api/trello/task/save/${id}`, { title })
      .then(() => dispatch({
        type: SAVE_TASK,
        id,
        title
      }))
  }
}

export function editTask(id) {
  return (dispatch) => {
    request('PUT', `api/trello/task/edit/${id}`)
      .then(() => dispatch({
        type: EDIT_TASK,
        id
      }))
  }
}

export function changeStatusTask(id) {
  return (dispatch) => {
    request('PUT', `api/trello/task/complete/${id}`)
      .then(() => dispatch({
        type: CHANGE_STATUS_TASK,
        id
      }))
  }
}

export function deleteList(id) {
  return (dispatch) => {
    request('DELETE', `api/trello/list/${id}`)
      .then(() => dispatch({
        type: DELETE_LIST,
        id
      }))
  }
}

export function addList() {
  return (dispatch) => {
    request('POST', `api/trello/list`)
      .then(response => response.json())
      .then(list => dispatch({
        type: ADD_LIST,
        list
      }))
  }
}

export function editList(id) {
  return (dispatch) => {
    request('PUT', `api/trello/list/edit/${id}`)
      .then(() => dispatch({
        type: EDIT_LIST,
        id
      }))
  }
}

export function saveList(id, title) {
  return (dispatch) => {
    request('PUT', `api/trello/list/save/${id}`, { title })
      .then(() => dispatch({
        type: SAVE_LIST,
        id,
        title
      }))
  }
}