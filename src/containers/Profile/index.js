import React from 'react'
import {
    Text,
    View
} from 'react-native'

import getProfile from './actionsCreator'

const Profile = () => {
  getProfile('nicsnet')
    
  return (
    <View>
      <Text>I'm a profile</Text>
    </View>
  )
}

export default Profile
