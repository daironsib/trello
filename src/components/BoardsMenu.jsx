import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { addBoard, saveBoard } from '../actions'

class BoardsMenu extends React.Component {

  handlerAddBoard = () => {
    this.props.addBoard()
  }

  render() {
    return (
      <section className="boards-cont">
        {
          this.props.boards.map(board =>
            <Link to={`/board/${board.id}`} key={ board.id }>
              <div className="board-item" key={ board.id }>
                <span>{ board.title }</span>
              </div>
            </Link>)
        }
        <div className="add-card-button-wrap add-board-wrap">
          <button className="add-card-button" onClick={ this.handlerAddBoard }>+</button>
        </div>
      </section>
    )
  }
}

export default connect(
  (state) => ({boards: state.boards}),
  (dispatch) => bindActionCreators({ addBoard, saveBoard }, dispatch))(BoardsMenu)