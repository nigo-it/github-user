import React from 'react'
import { connect } from 'react-redux'
import {
    Text,
    View,
    TextInput,
    TouchableHighlight
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import getProfile from './actionsCreator'
import styles from './styles'

const Finder = ({ getProfile }) => {
  const showProfile = () => {
    getProfile('nicsnet')
    Actions.profile()
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.sometext}>Search Github User</Text>
      <TextInput
        autoCapitalize = 'none'
        style={styles.searchbox}
      />
      <TouchableHighlight
       style={styles.button}
       onPress={showProfile}
      >
      <Text style={styles.buttonText}>Search</Text>
      </TouchableHighlight>
    </View>
  )
}

const mapDispatchToProps = ({
  getProfile
})

export default connect(null, mapDispatchToProps)(Finder)
