import React from 'react'
import '../App.css'
import List from './List'

function Board(props) {
  const lists = props.store.getState()

  return (
    <section className="board">
      <h1>Trello Main Board</h1>
      <div className="lists-wrapper">
        <div className="lists">
          { lists.map(list =>
            <List store={ props.store } id={ list.id } title={ list.title } key={ list.id } tasks={ list.tasks } onDeleteList={ props.onDeleteList } />)
          }
        </div>
      </div>
    </section>
  )
}

export default Board