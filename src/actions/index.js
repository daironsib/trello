export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const EDIT_TASK = 'EDIT_TASK'
export const CHANGE_STATUS_TASK = 'CHANGE_STATUS_TASK'
export const DELETE_LIST = 'DELETE_LIST'

function generate_id() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + s4();
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

export function editTask(id, title) {
  return {
    type: EDIT_TASK,
    id,
    title
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