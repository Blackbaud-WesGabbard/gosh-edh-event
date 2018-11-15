import React from 'react'
import routes from './routes'
import { createClient } from 'boiler-room-runner'
import { render } from 'react-dom'
import { configureStore } from './store'
import {
  getLocalStorageItem,
  setLocalStorageItem
} from 'constructicon/lib/localStorage'
import { updateClient } from 'supporticon/utils/client'
import 'minimal.css'
import './lib/localisation'

if (typeof Promise === 'undefined') {
  require('es6-promise').polyfill()
}

updateClient({ baseURL: process.env.SUPPORTICON_BASE_URL })

const initialState = JSON.parse(
  document.getElementById('initial-state').innerHTML
)
const loadedState = getLocalStorageItem('app-state')
const store = configureStore({
  ...initialState,
  ...loadedState
})

store.subscribe(() => {
  const { analytics, session } = store.getState()
  setLocalStorageItem('app-state', { analytics, session })
})

const basepath = process.env.BASE_PATH
const App = createClient({ basepath, routes, store })

render(<App />, document.getElementById('mount'))
