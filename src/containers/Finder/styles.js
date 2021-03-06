import { StyleSheet } from 'react-native'

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
      marginLeft: '5%',
      borderStyle: 'solid',
      borderColor: '#000',
      flexDirection: 'row',
      width: '90%',
      alignSelf: 'stretch',
      borderWidth: 1,
      fontSize: 42
    },
    button: {
      height: 45,
      width: '90%',
      flexDirection: 'row',
      backgroundColor: 'lightblue',
      borderColor: 'lightblue',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      marginLeft: '5%',
      alignSelf: 'stretch',
      justifyContent: 'center'
    },
    buttonText: {
      fontSize: 18,
      color: '#111',
      alignSelf: 'center'
    }
  }
)

export default styles
