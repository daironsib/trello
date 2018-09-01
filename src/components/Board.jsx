import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import List from './List'
import { addList, editBoard, saveBoard, deleteBoard } from '../actions'

class Board extends React.Component {

  handlerAddList = () => {
    this.props.addList(this.props.board[0].id)
  }

  handleEditBoard = () => {
    this.props.editBoard(this.props.board[0].id)
  }

  handleSaveBoard = (e) => {
    if (e.key === 'Enter') {
      this.props.saveBoard(this.props.board[0].id, this.refs.boardValue.value)
    }
  }

  handleDeleteBoard = () => {
    let yes = window.confirm('Do you want to delete this board?')
    if (yes) {
      this.props.deleteBoard(this.props.board[0].id, () => this.props.history.push('/'))
    }
  }

  render() {

    let board = { id: '', title: '' }

    if (this.props.board[0] !== undefined) {
      board = this.props.board[0]
    }

    return (
      <section className="board">
        <div className="board-header">
          <div className="board-header-left">
            <Link to="/">Back to Home Page</Link>
            <h1>{board.boardEditing ? <input type="text" ref='boardValue' defaultValue={board.title} onKeyPress={ this.handleSaveBoard } autoFocus/> : <span onClick={ this.handleEditBoard }>{board.title}</span>}</h1>
          </div>
          <div className="board-header-right">
            <span className="delete-board-btn" onClick={ this.handleDeleteBoard }>Delele Board</span>
          </div>
        </div>
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
  (dispatch) => bindActionCreators({ addList, editBoard, saveBoard, deleteBoard }, dispatch))(Board)