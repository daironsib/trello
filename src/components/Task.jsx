import React from 'react'
import { changeStatusTask, deleteTask, saveTask, editTask } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Task extends React.Component {

  constructor (props) {
    super(props)

    this.handleStatusChange = this.handleStatusChange.bind(this)
    this.handleTaskDelete = this.handleTaskDelete.bind(this)
    this.handleEditTask = this.handleEditTask.bind(this)
    this.handleSaveTask = this.handleSaveTask.bind(this)
  }

  handleStatusChange () {
    this.props.changeStatusTask(this.props.data.id)
  }

  handleTaskDelete () {
    this.props.deleteTask(this.props.data.id)
  }

  handleEditTask () {
    this.props.editTask(this.props.data.id)
  }

  handleSaveTask (e) {
    if (e.key === 'Enter') {
      this.props.saveTask(this.props.data.id, this.refs.taskValue.value)
    }
  }

  render () {
    const {data} = this.props
    const className = `item${this.props.completed ? ' completed' : ''}`

    return (
      <div className={className}>
        <div className="checkbox-cont">
          <input type="checkbox" onClick={this.handleStatusChange} defaultChecked={data.completed}/>
        </div>
        <div className="name">
          {data.taskEditing ? <input type="text" ref='taskValue' defaultValue={data.title}
                                     onKeyPress={this.handleSaveTask} autoFocus/> : <span
            onClick={this.handleEditTask}>{data.title}</span>}
        </div>
        <div className="delete-list-wrapper" onClick={this.handleTaskDelete}>
        <span role="button" tabIndex="0" aria-haspopup="true" aria-expanded="false" className="delete-list-button">
          <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40"><g><path
            d="m15.9 30.7v-15.7q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v15.7q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m5.7 0v-15.7q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v15.7q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m5.8 0v-15.7q0-0.3-0.2-0.5t-0.6-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v15.7q0 0.3 0.2 0.5t0.5 0.2h1.4q0.4 0 0.6-0.2t0.2-0.5z m-12.2-22.1h10l-1.1-2.6q-0.1-0.2-0.3-0.3h-7.1q-0.2 0.1-0.4 0.3z m20.7 0.7v1.4q0 0.3-0.2 0.5t-0.5 0.2h-2.1v21.2q0 1.8-1.1 3.2t-2.5 1.3h-18.6q-1.4 0-2.5-1.3t-1-3.1v-21.3h-2.2q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.2h6.9l1.6-3.8q0.3-0.8 1.2-1.4t1.7-0.5h7.2q0.9 0 1.8 0.5t1.2 1.4l1.5 3.8h6.9q0.3 0 0.5 0.2t0.2 0.5z"></path></g></svg>
        </span>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({}),
  (dispatch) => bindActionCreators({deleteTask, changeStatusTask, saveTask, editTask}, dispatch))(Task)