import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Quiz from '../components/quiz'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  }
})

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Quiz />
        </ScrollView>
      </View>
    )
  }
}
