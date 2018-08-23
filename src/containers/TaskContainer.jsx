import '../App.css'
import React from 'react'
import PropTypes from 'prop-types'
import Task from '../components/Task'
import { changeStatusTask, deleteTask } from '../actions'

class TaskContainer extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.listId = this.props.listId
    this.store = this.context.store
    this.tasks = this.store.getState().tasks
    this.renderTasks = this.tasks.filter(task => task.listId === this.listId ? task : false)
  }

  handleStatusChange = (id) => {
    this.store.dispatch(changeStatusTask(id))
  }

  handleTaskDelete = (id) => {
    this.store.dispatch(deleteTask(id))
  }

  render() {
    return (
      <div>
        { this.renderTasks.map(task =>
          <Task
            id={ task.id }
            title={ task.title }
            completed={ task.completed }
            key={ task.id }
            onStatusChange={ this.handleStatusChange }
            onTaskDelete={ this.handleTaskDelete }
          />)
        }
      </div>

    )
  }
}

TaskContainer.contextTypes = {
  store: PropTypes.object
}

export default TaskContainer
