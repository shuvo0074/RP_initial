import React from 'react';
import { StyleSheet,StatusBar, Text, View, TouchableOpacity,FlatList,Dimensions,Image,Alert,TouchableHighlight,ScrollView,Platform } from 'react-native';
import { Actions} from 'react-native-router-flux'


const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

let H=isPortrait() ? Dimensions.get('window').height : Dimensions.get('window').width

const isLandscape = () => {
  const dim = Dimensions.get('screen');
  return dim.width >= dim.height;
}

export default class home extends React.Component {
  constructor (props){
    super(props)
    this.state = ({
      orientation: isPortrait() ? 'portrait' : 'landscape',
      W: Dimensions.get('window').width
        })
      Dimensions.addEventListener('change', () => {
        this.setState({
        orientation: isPortrait() ? 'portrait' : 'landscape',
        W: Dimensions.get('window').width
      });
      })
    //this._onPressAdd = this._onPressAdd.bind (this)
  }

  onPressProductsButton(){
    Actions.products()
  }
  onPressDigSysButton(){
    Actions.digSystem()
  }
  onPressQuizButton(){
    Actions.quiz()
  }
  onPressContactButton(){
    Actions.contact()
  }
  onPressAboutButton(){
    Actions.about()
  }
  onPressHelpButton(){
    Actions.help()
  }

  render() {
    return (
    <ScrollView contentContainerStyle={styles.container}>
    <StatusBar
    color= 'red'
    //hidden={true}    
    />
    <TouchableOpacity
      onPress={this.onPressProductsButton}
      >
      <View style={[ styles.contentStyle, { width: this.state.W -10, } ]}>
        <Image 
        source={require('../contents/menuPictures/products.png')} 
        style= {{height: 70, width: 70, margin: 10, padding: 5,}}
        />
        <View style={{width: this.state.W-110}} >
          <Text style={styles.listItemFonts}>Products</Text>
          <Text>All products of Rangs Pharmaceuticals limited.</Text>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={this.onPressDigSysButton}
      >
      <View style={[ styles.contentStyle, { width: this.state.W -10, } ]}>
        <Image 
        source={require('../contents/menuPictures/dig_system.png')} 
        style= {{height: 70, width: 70, margin: 10, padding: 5,}}
        />
        <View style={{width: this.state.W-110}} >
          <Text style={styles.listItemFonts}>Digestive system</Text>
          <Text>Human digestive system</Text>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={this.onPressQuizButton}
      >
      <View style={[ styles.contentStyle, { width: this.state.W -10, } ]}>
        <Image 
        source={require('../contents/menuPictures/quiz.png')} 
        style= {{height: 70, width: 70, margin: 10, padding: 5,}}
        />
        <View style={{width: this.state.W-110}} >
          <Text style={styles.listItemFonts}>Quiz</Text>
          <Text>Overall quiz</Text>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={this.onPressContactButton}
      >
      <View style={[ styles.contentStyle, { width: this.state.W -10, } ]}>
        <Image 
        source={require('../contents/menuPictures/contact.png')} 
        style= {{height: 70, width: 70, margin: 10, padding: 5,}}
        />
        <View style={{width: this.state.W-110}} >
          <Text style={styles.listItemFonts}>Contact</Text>
          <Text>Contact info of Rangs Pharmaceuticals limited</Text>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={this.onPressAboutButton}
      >
      <View style={[ styles.contentStyle, { width: this.state.W -10, } ]}>
        <Image 
        source={require('../contents/menuPictures/about.png')} 
        style= {{height: 70, width: 70, margin: 10, padding: 5,}}
        />
        <View style={{width: this.state.W-110}} >
          <Text style={styles.listItemFonts}>About</Text>
          <Text>Know about this app</Text>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={this.onPressHelpButton}
      >
      <View style={[ styles.contentStyle, { width: this.state.W -10, } ]}>
        <Image 
        source={require('../contents/menuPictures/help.png')} 
        style= {{height: 70, width: 70, margin: 10, padding: 5,}}
        />
        <View style={{width: this.state.W-110}} >
          <Text style={styles.listItemFonts}>Help</Text>
          <Text>Help about this app</Text>
        </View>
      </View>
      </TouchableOpacity>
      <View style={{height: 50}} >
      </View>
    
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    alignItems: 'center',
    marginTop: 25,
  },
  listItemFonts: {
    fontSize: 12,
    color: '#ff6b81',
    padding: 5,
    alignItems: 'center',
  },
    fonts: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#27ae60',
      alignItems: 'center', 
    },
    buttonStyle: {
      margin: 10,
      height: 30,
      width: 80,
      borderWidth: 3,
      borderColor: '#192a56',
      borderRadius: 5,
      backgroundColor: '#1e3799',
      paddingTop: 2,
      },
    buttonFonts: {
      fontWeight: 'bold',
      color: '#27ae60',
      fontSize: 15,
      paddingLeft: 10,
    },
    contentStyle:{
        backgroundColor : 'white',
        flexDirection: 'row',
        borderRadius: 12,
        borderWidth:2,
        borderColor: '#aaa69d',
        margin: 3
      }
});
