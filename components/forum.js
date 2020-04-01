import React from 'react'
import {
  Text,
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native'

const styles = StyleSheet.create({
  list: {
    height: 180,
    borderWidth: 1,
    backgroundColor: 'white',
    marginBottom: 10,
    width: 380,
    borderColor: 'white',
    borderRadius: 20
  },
  post: {
    height: 40,
    width: 40
  },
  input: {
    height: 40,
    borderWidth: 1,
    backgroundColor: 'white',
    marginBottom: 10,
    width: 350,
    borderColor: 'white',
    borderRadius: 20,
    marginRight: 5
  },
  container: {
    backgroundColor: '#f7f8fa'
  },
  posts: {
    marginLeft: 10
  },
  headLine: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  txt: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  float: {
    flex: 1,
    flexDirection: 'row'
  },
  name: {
    fontSize: 22
  },
  userPost: {
    fontSize: 18
  },
  likes: {
    position: 'absolute',
    right: 1
  },
  likesNumber: {
    textAlign: 'center'
  },
  likeButton: {
    height: 35,
    width: 35
  }
})
export default class forum extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props)
    this.state = {
      userName: null,
      newPost: null,
      allPosts: [],
      likes: []
    }
    this.addLike = this.addLike.bind(this)
    this.addPost = this.addPost.bind(this)
  }
  componentDidMount() {
    fetch('https://marvel-forum.herokuapp.com/forum')
      .then(res => res.json())
      .then(data => this.setState({ allPosts: data }, () => {}))
  }
  addLike(userName) {
    fetch(`https://marvel-forum.herokuapp.com/likes/${userName}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
  addPost(userName, newPost) {
    fetch(`https://marvel-forum.herokuapp.com/add`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: userName, post: newPost })
    })
    this.componentDidMount()
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.txt}>Marvel Forum</Text>
          <View>
            <TextInput
              onChangeText={name => this.setState({ userName: name })}
              placeholder="Enter Name"
              style={styles.input}
            />
            <View style={styles.float}>
              <TextInput
                onChangeText={post => this.setState({ newPost: post })}
                placeholder="Write new post..."
                style={styles.input}
              />
              <TouchableOpacity
                onPress={() => {
                  this.addPost(this.state.userName, this.state.newPost)
                  this.componentDidMount()
                }}
              >
                <ImageBackground style={styles.post} source={require('../images/send.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.posts}>
            <Text style={styles.headLine}>Posts</Text>
            {this.state.allPosts.map(item => (
              <View style={styles.list}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.userPost}>{item.post}</Text>
                <View style={styles.likes}>
                  <TouchableOpacity
                    onPress={() => {
                      this.addLike(item.name)
                      this.componentDidMount()
                    }}
                  >
                    <ImageBackground
                      style={styles.likeButton}
                      source={{
                        uri:
                          'https://www.searchpng.com/wp-content/uploads/2019/02/Instagram-Like-Icon.png'
                      }}
                    />
                  </TouchableOpacity>
                  <Text style={styles.likesNumber}>{item.likes}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    )
  }
}
