import React from 'react'
import PropTypes from 'prop-types'
import './App.css'

import Board from './components/Board'

class App extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.store = this.context.store
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
        <Board/>
      </main>
    )
  }
}

App.contextTypes = {
  store: PropTypes.object
}

export default App
