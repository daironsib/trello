import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import List from './List'
import { addList } from '../actions'

class Board extends React.Component {

  handlerAddList = () => {
    this.props.addList()
  }

  render() {
    let board = { title: '' }

    if (this.props.board[0] !== undefined) {
      board = this.props.board[0]
    }

    return (
      <section className="board">
        <h1>{ board.title }</h1>
        <div className="lists-wrapper">
          <div className="lists">
            {
              this.props.lists !== undefined ? this.props.lists.map(list => <List data={ list } key={ list.id } />) : null
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

export default connect(
  (state, match) => (
    {
      board: state.boards.filter(board => board.id === Number(match.match.params.id)),
      lists: state.lists.filter(list => list.boardId === Number(match.match.params.id))
    }),
  (dispatch) => bindActionCreators({ addList }, dispatch))(Board)