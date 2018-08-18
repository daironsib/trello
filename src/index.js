import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import reducer from './reducers'
import App from './App'
import data from './store/state'

const store = createStore(reducer, data)

ReactDOM.render(
  <App store={store} />,
document.getElementById('root'));
