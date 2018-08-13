import React, { Component } from 'react'
import './App.css'

import state from './store/state'
import Board from './components/Board'

class App extends Component {
  render() {
    return (
      <main>
        <Board state={state} />
      </main>
    )
  }
}

export default App
