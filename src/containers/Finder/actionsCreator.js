import { requestProfile, receiveProfile, failProfile } from './actions'
import getGithubUser from './../../services/profileService'


const getProfile = (username) => (dispatch) => {
  dispatch(requestProfile())
  getGithubUser(username)
    .then((profile) => dispatch(receiveProfile(profile)))
    .catch(() => dispatch(failProfile()))
}

export default getProfile
