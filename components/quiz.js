import React from 'react'
import { Text, ImageBackground, View, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: 400,
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 130,
    borderRadius: 20,
    marginBottom: 10
  },
  question: {
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 20
  },
  txtAnswer: {
    backgroundColor: 'white',
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 20,
    width: 200,
    height: 50,
    marginBottom: 20,
    paddingTop: 15,
    overflow: 'hidden'
  },
  result: {
    textAlign: 'center',
    alignItems: 'center'
  },
  txt: {
    color: 'white',
    fontSize: 30
  },
  img: {
    width: 200,
    height: 300,
    borderRadius: 20
  },
  title:{
      fontSize:26,
      textAlign:'center',
      color:'white',
      marginBottom:10
  }
})
export default class quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: 0,
      characters: [0, 0, 0, 0, 0]
    }
  }

  render() {
    if (this.state.question === 0) {
      return (
        <View>
          <Text style={styles.title}>Which Marvel Character Are You?</Text>
          <Text style={styles.question}>What is your favorite food?</Text>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 1 })
                this.state.characters[4] = this.state.characters[4] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 20 }}
                source={{
                  uri: 'https://www.onceuponachef.com/images/2015/07/plum-tomato-basil-sauce.jpg'
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 1 })
                this.state.characters[3] = this.state.characters[3] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 20 }}
                source={{
                  uri: 'https://www.kipa.co.il/userFiles/2_3645d918ad78b5b00995653912d34b34.jpg'
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 1 })
                this.state.characters[2] = this.state.characters[2] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 20 }}
                source={{
                  uri:
                    'https://static.kidspot.com.au/recipe_asset/3441/2419.jpg-20170221013956~q75,dx720y432u1r1gg,c--.jpg'
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 1 })
                this.state.characters[1] = this.state.characters[1] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 20 }}
                source={{
                  uri:
                    'https://images.japancentre.com/recipes/pics/18/main/makisushi.jpg?1557308201'
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 1 })
                this.state.characters[0] = this.state.characters[0] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 20 }}
                source={{
                  uri:
                    'https://www.fdfworld.com/sites/default/files/styles/slider_detail/public/topic/image/GettyImages-527681764.jpg?itok=r_ER3RhW'
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    if (this.state.question === 1) {
      return (
        <View>
          <Text style={styles.title}>Which Marvel Character Are You?</Text>
          <Text style={styles.question}>How would your BFF describe you?</Text>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 2 })
                this.state.characters[1] = this.state.characters[1] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <Text style={styles.txtAnswer}>Smart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 2 })
                this.state.characters[2] = this.state.characters[2] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <Text style={styles.txtAnswer}>Loyal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 2 })
                this.state.characters[3] = this.state.characters[3] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <Text style={styles.txtAnswer}>Enthusaistic</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 2 })
                this.state.characters[0] = this.state.characters[0] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <Text style={styles.txtAnswer}>Charming</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 2 })
                this.state.characters[4] = this.state.characters[4] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <Text style={styles.txtAnswer}>Angry</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    if (this.state.question === 2) {
      return (
        <View>
          <Text style={styles.title}>Which Marvel Character Are You?</Text>
          <Text style={styles.question}>
            Which TV character would you be heart broken over if they were killed by Thanos?
          </Text>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 3 })
                this.state.characters[0] = this.state.characters[0] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 20 }}
                source={{
                  uri:
                    'https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C_400x400.jpg'
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 3 })
                this.state.characters[3] = this.state.characters[3] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 20 }}
                source={{
                  uri:
                    'https://vignette.wikia.nocookie.net/bigbangtheory/images/b/be/Curie10.jpg/revision/latest?cb=20190417120137'
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 3 })
                this.state.characters[4] = this.state.characters[4] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 20 }}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeIPpENaJE8WSOjWRLm2mtQdtSG29hwpXLdgXHaQ2aje1nqc1i'
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 3 })
                this.state.characters[2] = this.state.characters[2] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 20 }}
                source={{
                  uri:
                    'https://vignette.wikia.nocookie.net/strangerthings8338/images/6/62/Eleven_S2_revised.png/revision/latest?cb=20171124231338'
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 3 })
                this.state.characters[1] = this.state.characters[1] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 20 }}
                source={{
                  uri:
                    'https://static1.comicvine.com/uploads/original/11117/111179331/5193186-walter_with_a_bald_head.png'
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    if (this.state.question === 3) {
      return (
        <View>
          <Text style={styles.title}>Which Marvel Character Are You?</Text>
          <Text style={styles.question}>Which animal are you?</Text>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 4 })
                this.state.characters[3] = this.state.characters[3] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 20 }}
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1544717455-4cf7ad978978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 4 })
                this.state.characters[0] = this.state.characters[0] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 20 }}
                source={{
                  uri: 'https://download.ams.birds.cornell.edu/api/v1/asset/66031271/1800'
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 4 })
                this.state.characters[2] = this.state.characters[2] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 20 }}
                source={{
                  uri:
                    'https://i2.wp.com/metro.co.uk/wp-content/uploads/2017/10/567892431.jpg?quality=90&strip=all&zoom=1&resize=644%2C429&ssl=1'
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 4 })
                this.state.characters[4] = this.state.characters[4] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 20 }}
                source={{ uri: 'https://eagle.co.ug/wp-content/uploads/2018/03/gorilla1.jpg' }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 4 })
                this.state.characters[1] = this.state.characters[1] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <ImageBackground
                style={styles.image}
                imageStyle={{ borderRadius: 20 }}
                source={{
                  uri:
                    'https://www.illumina.com/content/dam/illumina-marketing/images/company/featured-articles/bottlenose_dolphin.png'
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    if (this.state.question === 4) {
      return (
        <View>
          <Text style={styles.title}>Which Marvel Character Are You?</Text>
          <Text style={styles.question}>Which super power would you choose?</Text>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 5 })
                this.state.characters[1] = this.state.characters[1] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <Text style={styles.txtAnswer}>Super Intelligence</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 5 })
                this.state.characters[2] = this.state.characters[2] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <Text style={styles.txtAnswer}>Super Strength</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 5 })
                this.state.characters[4] = this.state.characters[4] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <Text style={styles.txtAnswer}>Transformation</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 5 })
                this.state.characters[0] = this.state.characters[0] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <Text style={styles.txtAnswer}>Super speed</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 5 })
                this.state.characters[3] = this.state.characters[3] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <Text style={styles.txtAnswer}>Fast reflexes</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    if (this.state.question === 5) {
      return (
        <View>
          <Text style={styles.title}>Which Marvel Character Are You?</Text>
          <Text style={styles.question}>What do you do on your free time?</Text>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 6 })
                this.state.characters[3] = this.state.characters[3] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <Text style={styles.txtAnswer}>Watch TV</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 6 })
                this.state.characters[1] = this.state.characters[1] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <Text style={styles.txtAnswer}>Read</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 6 })
                this.state.characters[0] = this.state.characters[0] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <Text style={styles.txtAnswer}>Exercise</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 6 })
                this.state.characters[2] = this.state.characters[2] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <Text style={styles.txtAnswer}>Listen to music</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ question: 6 })
                this.state.characters[4] = this.state.characters[4] + 1
                this.setState({ characters: this.state.characters })
              }}
            >
              <Text style={styles.txtAnswer}>Sleep</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    if (this.state.question === 6) {
      let max = 0
      let character
      let image
      max = this.state.characters.indexOf(Math.max(...this.state.characters))
      if (max === 0) {
        character = 'Thor'
        image =
          'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/1/13/Thor-EndgameProfile.jpg/revision/latest/scale-to-width-down/310?cb=20190423174911'
      }
      if (max === 1) {
        character = 'Iron Man'
        image =
          'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/3/35/IronMan-EndgameProfile.jpg/revision/latest/scale-to-width-down/2000?cb=20190423175213'
      }
      if (max === 2) {
        character = 'Captain America'
        image =
          'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/d/d7/CapAmerica-EndgameProfile.jpg/revision/latest/scale-to-width-down/2000?cb=20190423175339'
      }
      if (max === 3) {
        character = 'Spiderman'
        image = 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871602-aif4.jpg'
      }
      if (max === 4) {
        character = 'Hulk'
        image =
          'https://vignette.wikia.nocookie.net/marvelmovies/images/2/2c/Avengers_Infinity_War_Hulk_poster.jpg/revision/latest?cb=20180404210540'
      }
      return (
        <View style={styles.result}>
          <Text style={styles.txt}>{character}</Text>
          <ImageBackground
            style={styles.img}
            imageStyle={{ borderRadius: 20 }}
            source={{ uri: image }}
          />
        </View>
      )
    }
    return <View />
  }
}
