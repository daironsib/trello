import React from 'react'
import '../App.css'
import ListContainer from '../containers/ListContainer'

function Board(props) {
  const lists = props.store.getState()

  return (
    <section className="board">
      <h1>Trello Main Board</h1>
      <div className="lists-wrapper">
        <div className="lists">
          { lists.map(list =>
            <ListContainer store={ props.store } id={ list.id } key={ list.id } />)
          }
        </div>
      </div>
    </section>
  )
}

export default Board