import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import List from './List'
import { addList } from '../actions'

class Board extends React.Component {

  handlerAddList = () => {
    this.props.addList()
  }

  render() {
    return (
      <section className="board">
        <h1>Trello Main Board</h1>
        <div className="lists-wrapper">
          <div className="lists">
            { this.props.lists.map(list =>
              <List data={ list } key={ list.id } />)
            }
          </div>
          <div className="add-card-button-wrap add-list-wrap">
            <button className="add-card-button" onClick={ this.handlerAddList }>+</button>
          </div>
        </div>
      </section>
    )
  }
}

Board.contextTypes = {
  store: PropTypes.object
}

export default connect(
  (state) => ({lists: state.lists}),
  (dispatch) => bindActionCreators({ addList }, dispatch))
(Board)