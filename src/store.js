import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import ProfileReducer from './containers/Profile/reducer'

const reducers = combineReducers({ ProfileReducer })
const store = createStore(reducers , applyMiddleware(thunk))

export default store
