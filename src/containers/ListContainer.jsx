import React from 'react'
import PropTypes from 'prop-types'
import List from '../components/List'
import { addTask, deleteList } from '../actions'

class ListContainer extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.store = this.context.store

    this.handleAddTask = this.handleAddTask.bind(this)
    this.handleListDelete = this.handleListDelete.bind(this)
  }

  handleListDelete(id) {
    let yes = window.confirm('Do you want to delete this list?')
    if (yes) {
      this.store.dispatch(deleteList(id))
    }
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
        onAddTask = { this.handleAddTask }
      />
    )
  }
}

ListContainer.contextTypes = {
  store: PropTypes.object
}

export default ListContainer
