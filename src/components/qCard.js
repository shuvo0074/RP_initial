import React from 'react';
import { View,Text, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import QCardData from '../data/qCardData'
import { Button } from 'react-native-elements';

export default class qCard extends React.Component {
  state = {
    cardIndex: 0,
  };

  render() {
    if (QCardData[this.state.cardIndex+1]==null) {
      return (
        <View style ={{flex:1,alignItems: 'center', justifyContent: 'center'}} >
        
        <Text style={{fontWeight: 'bold', fontSize: 18}} >
          {QCardData[this.state.cardIndex].question}
        </Text>
        <Text style={{ fontSize: 15}} >
          {QCardData[this.state.cardIndex].answer}
        </Text>
        <View style={{flexDirection: 'row',flex: 1, alignItems: 'center', justifyContent: 'center'}} >
        <Button title="previous" 
        style= {{marginHorizontal: 25,}}
        onPress= {()=>{
          this.setState({cardIndex: this.state.cardIndex-1})
        }} />
        <Button title="Finish" 
          style= {{marginHorizontal: 25,}}
          onPress= {()=>{
        }} />
        </View>
        </View>
        )
    }
    else if (this.state.cardIndex==0){
      return (
        <View style ={{flex:1,alignItems: 'center', justifyContent: 'center'}} >
        
        <Text style={{fontWeight: 'bold', fontSize: 18}} >
          {QCardData[this.state.cardIndex].question}
        </Text>
        <Text style={{ fontSize: 15}} >
          {QCardData[this.state.cardIndex].answer}
        </Text>
        <View style={{flexDirection: 'row',flex: 1, alignItems: 'center', justifyContent: 'flex-end'}} >
        <Button title="Next" 
          style= {{marginHorizontal: 25,}}
          onPress= {()=>{
            this.setState({cardIndex: this.state.cardIndex+1})
        }} />
        </View>
        </View>
        )
    }
    return (
    <View style ={{flex:1,alignItems: 'center', justifyContent: 'center'}} >
    
    <Text style={{fontWeight: 'bold', fontSize: 18}} >
      {QCardData[this.state.cardIndex].question}
    </Text>
    <Text style={{ fontSize: 15}} >
      {QCardData[this.state.cardIndex].answer}
    </Text>
    <View style={{flexDirection: 'row',flex: 1, alignItems: 'center', justifyContent: 'center'}} >
    <Button title="previous" 
    style= {{marginHorizontal: 25,}}
    onPress= {()=>{
        this.setState({cardIndex: this.state.cardIndex-1})
    }} />
    <Button title="Next" 
      style= {{marginHorizontal: 25,}}
      onPress= {()=>{
      this.setState({cardIndex: this.state.cardIndex+1})
    }} />
    </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
});