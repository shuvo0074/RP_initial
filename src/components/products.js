import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,FlatList,Dimensions,Image,Alert,TouchableHighlight } from 'react-native';
import { Actions} from 'react-native-router-flux'
import Swipeout from 'react-native-swipeout'
import ProductData from '../data/productData'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import QCard from './qCard'

class ProductsComponent extends React.Component {
  constructor (props){
    super(props)
    this.state = ({
    })
  }
  render(){
    return(
      <TouchableOpacity
      onPress={()=>{
        return(
          
        )
      }}
      >
      <View style={[ styles.contentStyle, { width: this.state.W -10, } ]}>
        <Image 
        source={require('../contents/med.png')} 
        style= {{height: 70, width: 70, margin: 10, padding: 5,}}
        />
        <View style={{width: this.state.W-110}} >
          <Text style={styles.listItemFonts}>Contact</Text>
          <Text>Contact info of Rangs Pharmaceuticals limited</Text>
        </View>
      </View>
      </TouchableOpacity>
    )
  }
}

export default class products extends React.Component {
  constructor (props){
    super(props)
    this.state = ({
    })
  }

  render() {
    return (

      <View style={styles.container}>        
        <Text>
        {ProductData[1].name}
        </Text>
        <FlatList style={styles.list}
        data={ProductData}
        ref={'flist'}
        renderItem={({item,index})=>
        {
            return (
                <ProductsComponent item={item} index={index} parentFlatList = {this} ></ProductsComponent>
            )
        }}
        >
        </FlatList>
      </View>
    );
  }
}
let H=Dimensions.get('window').height
let W=Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex:1,
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
