import React from 'react'
import {
  ScrollView,
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Text
} from 'react-native'
import movieTrailer from 'movie-trailer'
import CharacterInfo from '../components/characterInfo'

const styles = StyleSheet.create({
  list: {
    height: 360,
    width: 200,
    borderWidth: 1,
    backgroundColor: 'white',
    marginLeft: 15
  },
  characters: {
    height: 335,
    width: 200,
    borderWidth: 1,
    backgroundColor: 'white',
    marginLeft: 15
  },
  img: {
    width: 200,
    height: 300
  },
  container: {
    width: 400,
    minHeight: 850,
    overflow: 'scroll',
    alignItems: 'center',
    justifyContent: 'center'
  },
  play: {
    height: 100,
    width: 100,
    position: 'absolute',
    top: 100,
    bottom: 0,
    left: 50,
    right: 0
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subTitle: {
    color: 'white',
    fontSize: 20
  },
  originalTitle: {
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold'
  },
  releaseDate: {
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
    color: '#aaacaf'
  },
  content: {
    height: 15
  },
  movieTitle: {
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold'
  }
})

export default class moviesByOrder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: true,
      marvel_movies: [],
      characters: [],
      current_movie: {}
    }
    this.sortByYear = this.sortByYear.bind(this)
  }
  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/keyword/180547/movies?api_key=d9bc9e10056632a1a74c8260d60d105d&language=en-US&include_adult=false&page=1'
    )
      .then(res => res.json())
      .then(data => this.setState({ marvel_movies: data.results }, () => {}))
    fetch(
      'https://api.themoviedb.org/3/keyword/180547/movies?api_key=d9bc9e10056632a1a74c8260d60d105d&language=en-US&include_adult=false&page=2'
    )
      .then(res => res.json())
      .then(data =>
        this.setState(
          {
            marvel_movies: [
              ...this.state.marvel_movies,
              data.results[0],
              data.results[1],
              data.results[2]
            ]
          },
          () => this.sortByYear()
        )
      )
    const rootUrl = 'https://api.imgur.com/3/album/hYj7NWq'
    fetch(rootUrl, {
      headers: {
        Authorization: 'Bearer 67fab0baaac7787e80aa50743a33923c1ef87037'
      }
    })
      .then(response => {
        return response.json()
      })
      .then(data => this.setState({ characters: data.data.images }), () => {})
  }
  sortByYear() {
    this.state.marvel_movies.sort(function(a, b) {
      return new Date(a.release_date).getTime() - new Date(b.release_date).getTime()
    })
    this.setState({ marvel_movies: this.state.marvel_movies })
  }
  watchTrailer(movie) {
    movieTrailer(movie).then(response => LinkingIOS.openURL(response))
  }

  render() {
    return (
      <View>
        {this.state.isVisible ? (
          <View style={styles.container}>
            <Text style={styles.title}>Newbie's Guide</Text>
            <Text style={styles.subTitle}>Movies</Text>
            <View>
              <ScrollView horizontal>
                {this.state.marvel_movies.map(item => (
                  <View key={item.id} style={styles.list}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({ current_movie: item.original_title })
                        movieTrailer(item.original_title).then(response =>
                          Linking.openURL(response)
                        )
                      }}
                    >
                      <ImageBackground
                        source={{ uri: `http://image.tmdb.org/t/p/w185/${item.poster_path}` }}
                        style={styles.img}
                      />
                      <ImageBackground
                        source={require('../images/playButton.png')}
                        style={styles.play}
                      />
                    </TouchableOpacity>
                    <Text style={styles.originalTitle}>{item.original_title}</Text>
                    <Text style={styles.releaseDate}>{item.release_date}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
            <View style={styles.content}></View>
            <Text style={styles.subTitle}>Characters</Text>
            <View>
              {this.state.characters.length ? (
                <ScrollView horizontal>
                  {this.state.characters.map(item => (
                    <View key={item.id} style={styles.characters}>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ isVisible: false })
                          this.setState({ current_movie: item })
                        }}
                      >
                        <ImageBackground source={{ uri: item.link }} style={styles.img} />
                      </TouchableOpacity>
                      <Text style={styles.movieTitle}>{item.title}</Text>
                    </View>
                  ))}
                </ScrollView>
              ) : null}
            </View>
          </View>
        ) : (
          <View>
            <CharacterInfo data={this.state.current_movie} />
          </View>
        )}
      </View>
    )
  }
}
