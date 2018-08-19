import React from 'react'
import '../App.css'
import PropTypes from 'prop-types'
import ListContainer from '../containers/ListContainer'

class Board extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.store = context.store
    this.lists = this.store.getState()
  }

  render() {
    return (
      <section className="board">
        <h1>Trello Main Board</h1>
        <div className="lists-wrapper">
          <div className="lists">
            { this.lists.map(list =>
              <ListContainer store={ this.store } id={ list.id } key={ list.id } />)
            }
          </div>
        </div>
      </section>
    )
  }
}

Board.contextTypes = {
  store: PropTypes.object
}

export default Board