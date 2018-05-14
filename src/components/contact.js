import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,FlatList,Dimensions,Image,Alert,TouchableHighlight,ScrollView } from 'react-native';
import { Actions} from 'react-native-router-flux'
import { Button } from 'react-native-elements';
import { MapView } from 'react-native-maps';

var Button = require('@remobile/react-native-simple-button');
var Call = require('@remobile/react-native-call');

export default class about extends React.Component {
  constructor (props){
    super(props)
    this.state = ({
    })
  }
  callNumber() {
    Call.callNumber(()=>{
      }, ()=>{},
      "+880029123560",
      true,
    );
  }
  handleEmail = () => {
    const to = ['info@era.com.bd', 'info@era.com.bd'] 
    email(to, {
        cc: ['info@era.com.bd', 'info@era.com.bd'],
        bcc: 'info@era.com.bd',
        subject: 'Email',
        body: 'Some body right here'
    }).catch(console.error)
}

  render() {
    return (

      <ScrollView contentContainerStyle={styles.container}>
      
      <View style={[styles.header,{backgroundColor: 'red'}]} >
      <Text style={styles.headerFonts}>
        Head Office
      </Text>
      </View>

      <Text style={styles.headerFonts}>
      Rangs Pharmaceuticals Limited
      </Text>
      <Text>
        Rangs Bhaban (Level-5),117/a,
        Bijoy Sharani,
        Old Airport Road, Tejgaon,
        Dhaka-1215,Bangladesh.
        Contact to HR and Admin:

      </Text>

      <Button title="info@rangspharma.net" onPress={this.handleEmail} />


      <Button onPress={this.callNumber}>
            +880-02-9123560
      </Button>

      <MapView
      style={styles.map}
      region={{
          latitude: 59.3293234999999,
          longitude:18.068580800000063,
          latitudeDelta:0.1,
          longitudeDelta:0.1
      }}
      >
        <MapView.Marker
          coordinate={{
            latitude: 59.3293234999999,
            longitude:18.068580800000063
          }}
          title={'title'}
          description={'description'}
        />
        </MapView>
      </ScrollView>
    );
  }
}
let H=Dimensions.get('window').height
let W=Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
  },
  headerFonts: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
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
    header: {
      alignItems: 'center',
    },
    headerFonts: {
      fontSize: 20,
      fontWeight: 'bold',
      padding: 10
    },
});
