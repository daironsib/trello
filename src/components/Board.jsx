import React from 'react'
import '../App.css'
import List from './List'

function Board(props) {
  return (
    <section className="board">
      <h1>Trello Main Board</h1>
      <div className="lists-wrapper">
        <div className="lists">
          { props.state.map(list =>
            <List title={ list.title } key={ list.id } tasks={ list.tasks } />)
          }
        </div>
      </div>
    </section>
  )
}

export default Board