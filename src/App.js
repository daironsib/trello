import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Board from './components/Board'
import BoardsMenu from './components/BoardsMenu'

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <Route exact path="/" component={ BoardsMenu }/>
          <Route path="/board/:id" component={ Board }></Route>
        </main>
      </Router>
    )
  }
}

export default connect(
  () => ({}),
  (dispatch) => bindActionCreators({}, dispatch))(App)