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

  render() {
    return (
      <main>
        <Board data={this.state.data} onStatusChange={ this.handleStatusChange } onTaskDelete={ this.handleTaskDelete } />
      </main>
    )
  }
}

export default App
