import React from 'react'
import './App.css'

import Board from './components/Board'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.initialData
    }

    this.handleStatusChange = this.handleStatusChange.bind(this)
    this.handleTaskDelete = this.handleTaskDelete.bind(this)
    this.handleListDelete = this.handleListDelete.bind(this)
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  generate_id() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + s4();
  }

  handleStatusChange(id) {
    let data = this.state.data.map(list => {
      if (list.tasks.length !== 0) {
        list.tasks.forEach(task => {
          if (task.id === id) {
            task.completed = !task.completed
          }
        })
      }

      return list
    })

    this.setState({ data })
  }

  handleTaskDelete(id) {
    let data = this.state.data.map(list => {
      if (list.tasks.length !== 0) {
        let newTasks = list.tasks.filter(task => task.id !== id)
        list.tasks = newTasks
      }

      return list
    })

    this.setState({ data })
  }

  handleListDelete(id) {
    let yes = window.confirm('Do you want to delete this list?')
    if (yes) {
      let data = this.state.data.filter(list => list.id !== id)
      this.setState({ data })
    }
  }

  handleAddTask(id) {
    let data = this.state.data.map(list => {
      if (list.id === id) {
        list.tasks.push(
          {
            completed: false,
            id: this.generate_id(),
            title: '',
            taskEditing: true
          }
        )
      }
      return list
    })

    this.setState({ data })
  }

  render() {
    return (
      <main>
        <Board data={this.state.data} onStatusChange={ this.handleStatusChange } onTaskDelete={ this.handleTaskDelete } onDeleteList={ this.handleListDelete } onAddTask={ this.handleAddTask } />
      </main>
    )
  }
}

export default App
