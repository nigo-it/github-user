import React from 'react'
import { connect } from 'react-redux'
import {
    Text,
    View,
    ActivityIndicator,
    Image,
} from 'react-native'

import styles from './styles'

const Profile = ({ data, loading }) => {
  const profileView = !data && loading ?
      <ActivityIndicator
        animating={loading}
        color='#111'
        size='large'
      /> :
      <Image
        source={{uri: data.avatar_url}}
        style={styles.image}
      />

  return (
    <View style={styles.container}>
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
