import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight
} from 'react-native';


export default class Finder extends React.Component {
  render() {
    return (
      <View style={styles.container}>
            <Text style={styles.sometext}>Search Github User</Text>
            <TextInput style={styles.searchbox}/>
            <TouchableHighlight
             style={styles.button}
             underlayColor='red'>
            <Text style={styles.buttonText}>my text</Text>
            </TouchableHighlight>
      </View>
    );
   }
}

const styles = StyleSheet.create(
  {
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
    },

      sometext: {
          fontSize: 28
      },

      searchbox: {
          marginTop: 6,
          borderStyle: 'solid',
          borderColor: '#000',
          flexDirection: 'row',
          alignSelf: 'stretch',
          borderWidth: 1,
          fontSize: 42
      },
      button: {
          height: 45,
          flexDirection: 'row',
          backgroundColor: 'lightblue',
          borderColor: 'lightblue',
          borderWidth: 1,
          borderRadius: 8,
          marginBottom: 10,
          marginTop: 10,
          alignSelf: 'stretch',
          justifyContent: 'center'
      },
      buttonText: {
          fontSize: 18,
          color: '#111',
          alignSelf: 'center'
      }
  }
);
