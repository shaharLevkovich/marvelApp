import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import MoviesByOrder from '../components/moviesByOrder'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#000000'
  }
})
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <MoviesByOrder />
      </ScrollView>
    )
  }
}
