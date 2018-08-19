import React from 'react'
import List from '../components/List'
import { addTask, changeStatusTask, deleteList, deleteTask } from '../actions'

class ListContainer extends React.Component {
  constructor(props) {
    super(props)

    this.store = this.props.store

    this.handleStatusChange = this.handleStatusChange.bind(this)
    this.handleTaskDelete = this.handleTaskDelete.bind(this)
    this.handleAddTask = this.handleAddTask.bind(this)
    this.handleListDelete = this.handleListDelete.bind(this)
  }

  handleListDelete(id) {
    this.store.dispatch(deleteList(id))
  }

  handleStatusChange(id) {
    this.store.dispatch(changeStatusTask(id))
  }

  handleTaskDelete(id) {
    this.store.dispatch(deleteTask(id))
  }

  handleAddTask(id) {
    this.store.dispatch(addTask(id))
  }

  render() {
    return(
      <List
        store={ this.store }
        id={ this.props.id }
        key={ this.props.id }
        onListDelete={ this.handleListDelete }
        onStatusChange={ this.handleStatusChange }
        onTaslDelete={ this.handleTaskDelete }
        onAddTask = { this.handleAddTask }
      />
    )
  }
}

export default ListContainer
