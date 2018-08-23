import React from 'react'
import { connect } from 'react-redux'
import List from '../components/List'
import { addTask, deleteList } from '../actions'
import { bindActionCreators } from 'redux'

class ListContainer extends React.Component {
  render() {
    let { data, tasks } = this.props
    tasks = tasks.filter(task => task.listId === data.id)

    return tasks.map(task => <List data={ task } />)
  }
}

export default connect(
  (state) => ({tasks: state.tasks}),
  (dispatch) => bindActionCreators({deleteList, addTask}, dispatch))(ListContainer)
