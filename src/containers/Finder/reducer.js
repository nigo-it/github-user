import {
    REQUESTED_PROFILE,
    RECEIVED_PROFILE,
    FAILED_PROFILE
} from './constants'

const initialState = {
  data: null,
  loading: false,
  error: false,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
  case REQUESTED_PROFILE:
      return { ...state, ...{ loading: true, error: false, data: null } }
  case RECEIVED_PROFILE:
      return { ...state, ...{ loading: false, error: false, data: action.data } }
  case FAILED_PROFILE:
      return { ...state, ...{ loading: false, error: true, data: null } }

    default:
      return state;
  }
}


export default profileReducer
