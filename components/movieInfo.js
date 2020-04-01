import React from 'react'
import { Text, ImageBackground, View, StyleSheet, TouchableOpacity } from 'react-native'
import Reviews from '../components/reviews'
import MarvelUniverse from '../components/marvelUniverse'
const styles = StyleSheet.create({
    container:{
        marginTop:5
    },
    back:{ 
        height: 30, 
        width: 30 
    },
    poster:{
        height: 150, 
        width: 120, 
        position: 'absolute', 
        left: 270 
    },
    title:{ 
        color: 'white', 
        fontSize: 24, 
        width: 250 
    },
    releaseDate:{ 
        color: 'white', 
        fontSize: 18 
    },
    rating:{ 
        color: 'white', 
        fontSize: 18 
    },
    summary:{ 
        color: 'white', 
        fontSize: 18 
    },
    txt:{
        backgroundColor: 'red',
        width: 100,
        height: 30,
        position: 'absolute',
        top: 450,
        left: 150,
        borderRadius: 10
    },
    review:{
        color: 'white', 
        fontSize: 24, 
        textAlign: 'center'
    }
})
export default class movieInfo extends React.Component {
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
          this.state.isVisible ? (
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ isReturn: false })
                }}
              >
                <ImageBackground
                  source={require('../images/go-back-arrow.png')}
                  style={styles.back}
                />
              </TouchableOpacity>

              <ImageBackground
                source={{ uri: `http://image.tmdb.org/t/p/w185/${this.props.data.poster_path}` }}
                style={styles.poster}
              />
              <Text style={styles.title}>
                {this.props.data.title}
                {'\n'}
              </Text>
              <Text style={styles.releaseDate}>
                Release date: {this.props.data.release_date}
                {'\n'}
              </Text>
              <Text style={styles.rating}>
                Rating: {this.props.data.vote_average}
                {'\n\n'}
              </Text>
              <Text style={styles.summary}>
                Summary: {this.props.data.overview}
              </Text>
              <TouchableOpacity
                style={styles.txt}
                onPress={() => {
                  this.setState({ isVisible: false })
                  this.setState({ current_movie: this.props.data.id })
                }}
              >
                <Text style={styles.review}>Reviews</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Reviews data={this.state.current_movie} />
            </View>
          )
        ) : (
          <View>
            <MarvelUniverse />
          </View>
        )}
      </View>
    )
  }
}
