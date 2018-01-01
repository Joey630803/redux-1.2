import React from 'react'
import {render} from 'react-dom'
import {createStore,applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import todos from './reducers/todos'
// import thunk from 'redux-thunk'

const store=createStore(
  todos
  //applyMiddleware(thunk)
)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
