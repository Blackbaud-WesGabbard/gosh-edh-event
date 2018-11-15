import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import analytics from './analytics'
import content from './content'
import flashMessages from './flashMessages'
import pages from './pages'
import session from './session'

const middleware =
  process.env.NODE_ENV === 'production' ? [thunk] : [thunk, createLogger()]

export const configureStore = (initialState = {}) =>
  createStore(
    combineReducers({
      analytics,
      content,
      flashMessages,
      pages,
      session
    }),
    initialState,
    applyMiddleware(...middleware)
  )
