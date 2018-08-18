import React from 'react'
import './App.css'

import { addTask, deleteTask, editTask, changeStatusTask, deleteList } from './actions'

import Board from './components/Board'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.store = this.props.store

    this.handleStatusChange = this.handleStatusChange.bind(this)
    this.handleTaskDelete = this.handleTaskDelete.bind(this)
    this.handleListDelete = this.handleListDelete.bind(this)
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleStatusChange(id) {
    this.store.dispatch(changeStatusTask(id))
  }

  handleTaskDelete(id) {
    this.store.dispatch(deleteTask(id))
  }

  handleListDelete(id) {
    this.store.dispatch(deleteList(id))
  }

  handleAddTask(id) {
    this.store.dispatch(addTask(id))
  }

  render() {
    return (
      <main>
        <Board data={this.store.getState()} onStatusChange={ this.handleStatusChange } onTaskDelete={ this.handleTaskDelete } onDeleteList={ this.handleListDelete } onAddTask={ this.handleAddTask } />
      </main>
    )
  }
}

export default App
