import React from 'react'
import { connect } from 'react-redux'
import {
    Text,
    View
} from 'react-native'

const Profile = ({ data, loading }) => {
  const profileView = !data && loading ?
    <Text>Loading</Text> :
    <Text>{data.name}</Text>

  return (
    <View>
      {profileView}
    </View>
  )
}

const mapStateToProps = ({ profile: { data, loading } }) => (
  {
    data,
    loading
  }
)

export default connect(mapStateToProps)(Profile)
