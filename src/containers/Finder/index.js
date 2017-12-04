import React from 'react'
import {
    Text,
    View,
    TextInput,
    TouchableHighlight
} from 'react-native'

import styles from './styles'


const Finder = () => (
  <View style={styles.container}>
        <Text style={styles.sometext}>Search Github User</Text>
        <TextInput style={styles.searchbox}/>
        <TouchableHighlight
         style={styles.button}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableHighlight>
  </View>
)

export default Finder
