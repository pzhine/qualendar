import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import app from './app/reducer'
import forms from './forms/reducer'

const configureStore = ({ history }) => {
  const reducer = combineReducers({ app, forms, routing: routerReducer })
  const middlewares = [thunk, routerMiddleware(history)]
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger())
  }
  const enhancer = applyMiddleware(...middlewares)
  return createStore(reducer, {}, enhancer)
}

export default configureStore
