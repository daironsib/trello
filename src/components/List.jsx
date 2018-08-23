import React from 'react'
import { addTask, deleteList } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Task from './Task'
import { memorizeCalculateStoreState } from '../utils/memorizeCalculateStoreState'

class List extends React.Component {
  handlerListDelete = () => {
    let yes = window.confirm('Do you want to delete this list?')
    if (yes) {
      this.props.deleteList(this.props.data.id)
    }
  }

  handlerAddTask = () => {
    this.props.addTask(this.props.data.id)
  }

  render () {
    const {data, tasks} = this.props
    console.log(`render list`)

    return (
      <section className="list-wrapper">
        <div className="list">
          <div className="list-header">
            <div className="name">{data.title}</div>
            <div className="delete-list-wrapper" onClick={this.handlerListDelete}>
              <span role="button" tabIndex="0" aria-haspopup="true" aria-expanded="false"
                    className="delete-list-button">
                <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="1em" width="1em"
                     viewBox="0 0 40 40"><g><path
                  d="m15.9 30.7v-15.7q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v15.7q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m5.7 0v-15.7q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v15.7q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m5.8 0v-15.7q0-0.3-0.2-0.5t-0.6-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v15.7q0 0.3 0.2 0.5t0.5 0.2h1.4q0.4 0 0.6-0.2t0.2-0.5z m-12.2-22.1h10l-1.1-2.6q-0.1-0.2-0.3-0.3h-7.1q-0.2 0.1-0.4 0.3z m20.7 0.7v1.4q0 0.3-0.2 0.5t-0.5 0.2h-2.1v21.2q0 1.8-1.1 3.2t-2.5 1.3h-18.6q-1.4 0-2.5-1.3t-1-3.1v-21.3h-2.2q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.2h6.9l1.6-3.8q0.3-0.8 1.2-1.4t1.7-0.5h7.2q0.9 0 1.8 0.5t1.2 1.4l1.5 3.8h6.9q0.3 0 0.5 0.2t0.2 0.5z"></path></g></svg>
              </span>
            </div>
          </div>
          <div className="cards-wrapper">
            <div className="cards">
              {tasks.map(task => <Task data={task} key={task.id}/>)}
            </div>
          </div>
        </div>

        <div className="add-card-button-wrap">
          <button className="add-card-button" onClick={this.handlerAddTask}>+</button>
        </div>
      </section>
    )
  }
}

export default connect(
  (state, props) => ({
    tasks: memorizeCalculateStoreState(
      `list-${props.data.id}`,
      state.tasks.filter(task => task.listId === props.data.id)
    )
  }),
  (dispatch) => bindActionCreators({deleteList, addTask}, dispatch))
(List)
