import React from 'react'
import { Text, ImageBackground, View, StyleSheet, TouchableOpacity } from 'react-native'
import ReadMore from 'react-native-read-more-text'
import MarvelUniverse from './marvelUniverse'
const styles = StyleSheet.create({
  movie_name: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  img: {
    height: 30,
    width: 30
  },
  container: {
    marginTop: 5
  },
  list: {
    marginTop: 10
  },
  author: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  content: {
    color: 'white',
    fontSize: 16
  },
  showMore: {
    color: 'red',
    fontSize: 16,
    marginTop: 5
  },
  showLess: {
    color: 'red',
    fontSize: 16,
    marginTop: 5
  }
})
export default class reviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: true,
      isReturn: true,
      reviews: [],
      movie_name: null
    }
    this._renderRevealedFooter = this._renderRevealedFooter.bind(this)
    this._renderTruncatedFooter = this._renderTruncatedFooter.bind(this)
  }
  componentDidMount() {
    fetch(
      `http://api.themoviedb.org/3/movie/${this.props.data}/reviews?api_key=d9bc9e10056632a1a74c8260d60d105d`
    )
      .then(res => res.json())
      .then(data => this.setState({ reviews: data.results }, () => console.log(this.state.reviews)))
    fetch(
      `https://api.themoviedb.org/3/movie/${this.props.data}?api_key=d9bc9e10056632a1a74c8260d60d105d&language=en-US`
    )
      .then(res => res.json())
      .then(data =>
        this.setState({ movie_name: data.title }, () => console.log(this.state.movie_name))
      )
  }
  _renderTruncatedFooter = handlePress => {
    return (
      <Text style={styles.showMore} onPress={handlePress}>
        Read more
      </Text>
    )
  }

  _renderRevealedFooter = handlePress => {
    return (
      <Text style={styles.showLess} onPress={handlePress}>
        Show less
      </Text>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isReturn ? 
          <View>
            <TouchableOpacity
              onPress={() => {
                this.setState({ isReturn: false })
              }}
            >
              <ImageBackground source={require('../images/go-back-arrow.png')} style={styles.img} />
            </TouchableOpacity>
            <Text style={styles.movie_name}>{this.state.movie_name} Reviews</Text>
            {this.state.reviews.map(item => (
              <View key={item.id} style={styles.list}>
                <Text style={styles.author}>Author: {item.author}</Text>

                <ReadMore
                  numberOfLines={3}
                  renderTruncatedFooter={this._renderTruncatedFooter}
                  renderRevealedFooter={this._renderRevealedFooter}
                >
                  <Text style={styles.content}>{item.content}</Text>
                </ReadMore>
              </View>
            ))}
          </View>
        : 
          <View>
            <MarvelUniverse />
          </View>
        }
      </View>
    )
  }
}
