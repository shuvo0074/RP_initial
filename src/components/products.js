import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,FlatList,Dimensions,Image,Alert,TouchableHighlight } from 'react-native';
import { Actions} from 'react-native-router-flux'
import Swipeout from 'react-native-swipeout'
import HomeData from '../data/homeData'

export default class products extends React.Component {
  constructor (props){
    super(props)
    this.state = ({
    })
  }

  refreshFlatList = (deletedKey) => {
    this.setState ((prevState) => {
      return{
      }
    })
  }

  render() {
    return (

      <View style={styles.container}>

        
        
      </View>
    );
  }
}
let H=Dimensions.get('window').height
let W=Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: 'white'
  },
  list: {
    flex: 1,
    width: W,
    backgroundColor: 'white',
  },
  listItemFonts: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#535c68',
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
    }
});
