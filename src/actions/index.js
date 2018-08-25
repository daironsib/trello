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

function generate_id() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + s4();
}

export function getData() {
  return axios.get('http://localhost:5000/api/trello')
    .then(response => response.data)
    .then(data => ({
      type: GET_DATA,
      data
    }))
}

export function addTask(id) {
  return {
    type: ADD_TASK,
    id: generate_id(),
    listID: id
  }
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    id
  }
}

export function saveTask(id, title) {
  return {
    type: SAVE_TASK,
    id,
    title
  }
}

export function editTask(id) {
  return {
    type: EDIT_TASK,
    id
  }
}

export function changeStatusTask(id) {
  return {
    type: CHANGE_STATUS_TASK,
    id
  }
}

export function deleteList(id) {
  return {
    type: DELETE_LIST,
    id
  }
}

export function addList() {
  return {
    type: ADD_LIST
  }
}

export function editList(id) {
  return {
    type: EDIT_LIST,
    id
  }
}

export function saveList(id, title) {
  return {
    type: SAVE_LIST,
    id,
    title
  }
}