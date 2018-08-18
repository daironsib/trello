import React from 'react'
import './App.css'

import Board from './components/Board'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.store = this.props.store
  }

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <main>
        <Board store={ this.store } />
      </main>
    )
  }
}

export default App
