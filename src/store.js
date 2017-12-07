import { createStore } from 'redux'
import ProfileReducer from './containers/Profile/reducer'

const store = createStore(ProfileReducer)

export default store
