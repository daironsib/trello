import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import data from './store/state'

ReactDOM.render(
  <App initialData={data} />,
document.getElementById('root'));
