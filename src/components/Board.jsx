import React from 'react'
import '../App.css'
import List from './List'

function Board(props) {
  return (
    <section className="board">
      <h1>Trello Main Board</h1>
      <div className="lists-wrapper">
        <div className="lists">
          { props.data.map(list =>
            <List id={ list.id } title={ list.title } key={ list.id } tasks={ list.tasks } onStatusChange={ props.onStatusChange } onTaskDelete={ props.onTaskDelete } onDeleteList={ props.onDeleteList } onAddTask={ props.onAddTask } />)
          }
        </div>
      </div>
    </section>
  )
}

export default Board