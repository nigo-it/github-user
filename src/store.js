import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import ProfileReducer from './containers/Finder/reducer'

const reducers = combineReducers({ ProfileReducer })

const middlewares = [thunk]
const logger = createLogger()
middlewares.push(logger)

const store = createStore(reducers , applyMiddleware(...middlewares))

export default store
