import axios from 'axios'

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
  return axios.get('http://localhost:5000/api/trello')
    .then(response => response.data)
    .then(data => ({
      type: GET_DATA,
      data
    }))
}

export function addTask(listId) {
  return axios.post('http://localhost:5000/api/trello/task', { listId })
    .then(response => response.data)
    .then(task => ({
      type: ADD_TASK,
      task
    }))
}

export function deleteTask(id) {
  return axios.delete(`http://localhost:5000/api/trello/task/${id}`)
    .then(response =>({
      type: DELETE_TASK,
      id
    }))
}

export function saveTask(id, title) {
  return axios.put(`http://localhost:5000/api/trello/task/save/${id}`, { title })
    .then(response => ({
      type: SAVE_TASK,
      id,
      title
    }))
}

export function editTask(id) {
  return axios.put(`http://localhost:5000/api/trello/task/edit/${id}`)
    .then(response => ({
      type: EDIT_TASK,
      id
    }))
}

export function changeStatusTask(id) {
  return axios.put(`http://localhost:5000/api/trello/task/complete/${id}`)
    .then(response => ({
      type: CHANGE_STATUS_TASK,
      id
    }))
}

export function deleteList(id) {
  return axios.delete(`http://localhost:5000/api/trello/list/${id}`)
    .then(response =>({
      type: DELETE_LIST,
      id
    }))
}

export function addList() {
  return axios.post('http://localhost:5000/api/trello/list')
    .then(response => response.data)
    .then(list => ({
      type: ADD_LIST,
      list
    }))
}

export function editList(id) {
  return axios.put(`http://localhost:5000/api/trello/list/edit/${id}`)
    .then(response => ({
      type: EDIT_LIST,
      id
    }))
}

export function saveList(id, title) {
  return axios.put(`http://localhost:5000/api/trello/list/save/${id}`)
    .then(response => ({
      type: SAVE_LIST,
      id,
      title
    }))
}