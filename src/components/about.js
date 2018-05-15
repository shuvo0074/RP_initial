import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,FlatList,Dimensions,Image,Alert,TouchableHighlight,ScrollView } from 'react-native';
import { Actions} from 'react-native-router-flux'
import { Button } from 'react-native-elements';
import email from 'react-native-email';


var Call = require('@remobile/react-native-call');

export default class about extends React.Component {
  constructor (props){
    super(props)
    this.state = ({
    })
  }
  callNumber1() {
    Call.callNumber(()=>{
      }, ()=>{},
      "+880247118757",
      true,
    );
  }
  callNumber2() {
    Call.callNumber(()=>{
      }, ()=>{},
      "+880247118642",
      true,
    );
  }
  callNumber3() {
    Call.callNumber(()=>{
      }, ()=>{},
      "+8801819274289",
      true,
    );
  }
  callNumber4() {
    Call.callNumber(()=>{
      }, ()=>{},
      "+8801969105093",
      true,
    );
  }
  handleEmail = () => {
    const to = ['info@era.com.bd', 'info@era.com.bd'] // string or array of email addresses
    email(to, {
        // Optional additional arguments
        cc: ['info@era.com.bd', 'info@era.com.bd'], // string or array of email addresses
        bcc: 'info@era.com.bd', // string or array of email addresses
        subject: 'Email',
        body: 'Some body right here'
    }).catch(console.error)
}

  render() {
    return (

      <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.header,{backgroundColor: 'red'}]} >
      <Text style={styles.headerFonts}>
      Rangs Pharmaceuticals Limited App
      </Text>
      </View>

      <Text style={styles.headerFonts} >
        This is a skill building application about Rangs Pharmaceuticals Limited products.
      </Text>

      <View style={[styles.header,{backgroundColor: 'red'}]} >
      <Text style={styles.headerFonts}>
      Rangs Pharmaceuticals Limited App
      </Text>
      </View>

      <View>
        <Text>
          Address: 
          Bengal center (4th, 6th and 9th floor),
          28. Topkhana Road, Dhaka-1000,
          Bangladesh
          Phone:
        </Text>
        <Button onPress={this.callNumber1}>
            +880247118757
        </Button>
        <Button onPress={this.callNumber2}>
            +880247118642
        </Button>
        <Text>
          Mobile:
        </Text>
        <Button onPress={this.callNumber3}>
            +8801819274289
        </Button>
        <Button onPress={this.callNumber4}>
            +8801969105093
        </Button>
        <Text>
          E-mail:
        </Text>
        <Button title="info@era.com.bd" onPress={this.handleEmail} />
        <Text>
          Website:
          www.erainfotechbd.com
        </Text>
      </View>

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
    }
});
