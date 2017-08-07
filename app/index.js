import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/app.js'
let store = createStore(todoApp, window.STATE_FROM_SERVER)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
