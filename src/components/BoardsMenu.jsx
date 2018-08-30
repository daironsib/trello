import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

class BoardsMenu extends React.Component {

  render() {
    return (
      <section className="boards-cont">
        {
          this.props.boards.map(board => <Link to={`/board/${board.id}`} key={ board.id }><div className="board-item" key={ board.id }>{ board.title }</div></Link>)
        }
      </section>
    )
  }
}

export default connect(
  (state) => ({boards: state.boards}),
  (dispatch) => bindActionCreators({ }, dispatch))(BoardsMenu)