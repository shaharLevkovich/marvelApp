import React from 'react'
import { Text, ImageBackground, View, StyleSheet, TouchableOpacity} from 'react-native'
import MoviesByOrder from '../components/moviesByOrder'
const styles = StyleSheet.create({
  character: {
    height: 150,
    width: 120,
    position: 'absolute',
    left: 270
  },
  img: {
    height: 30,
    width: 30
  },
  container: {
    marginTop: 5
  },
  title: {
    color: 'white',
    fontSize: 24,
    width: 250
  },
  data: {
    color: 'white',
    fontSize: 18,
    paddingTop: 110
  }
})

export default class characterInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: true,
      isReturn: true,
      current_movie: null
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.isReturn ? (
          <View>
            <TouchableOpacity
              onPress={() => {
                this.setState({ isReturn: false })
              }}
            >
              <ImageBackground source={require('../images/go-back-arrow.png')} style={styles.img} />
            </TouchableOpacity>

            <ImageBackground source={{ uri: this.props.data.link }} style={styles.character} />
            <Text style={styles.title}>
              {this.props.data.title}
              {'\n'}
            </Text>
            <Text style={styles.data}>
              {this.props.data.description}
              {'\n'}
            </Text>
          </View>
        ) : (
          <View>
            <MoviesByOrder />
          </View>
        )}
      </View>
    )
  }
}
