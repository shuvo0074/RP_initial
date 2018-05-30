import React from 'react';
import { View,Text, StyleSheet,Image,FlatList,TouchableOpacity, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import QuizData from '../data/quizData'
import { Button } from 'react-native-elements';


let arr=[]
var arr2=[]
export default class quiz extends React.Component {
  
  state = {
    quizIndex: 0,
    selected: [],
    checked: null,

  };
  render() {
      arr=this.state.selected
      arr2=QuizData[this.state.quizIndex].answer.split("~~")
      return (
        <View style ={{flex:1,paddingHorizontal: 20, justifyContent: 'center', backgroundColor: 'white',}} >
        <View style={{backgroundColor: '#bdc3c7',marginTop:40, margin : 10, padding: 5,}} >
          <Text style={{fontWeight: 'bold'}} >
            Question {this.state.quizIndex+1} of {QuizData.length}
          </Text>
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 18}} >
          {QuizData[this.state.quizIndex].question} 
        </Text>

        {
          arr2.map((item,index)=>{
            return(
              <View>
                {
                  
                  this.state.selected[this.state.quizIndex]==index ?
                <TouchableOpacity
                style={{ flexDirection: 'row',padding: 3}}
                
                >
                  <Image 
                  source={require('../contents/quiz/quizSelected.png')} 
                  style= {{height: 20, width: 20,margin: 3}}
                  />
                  <Text style={{fontWeight: 'bold', fontSize: 20}} >  {item}
                  </Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
              style={{ flexDirection: 'row'}}
              onPress={()=>{
                arr[this.state.quizIndex]=index
                this.setState({selected: arr})
                this.setState({checked: index})
              }}
              >
                <Image 
                source={require('../contents/quiz/quizNotSelected.png')} 
                style= {{height: 20, width: 20,margin: 3 }}
                />
                <Text style={{fontWeight: 'bold', fontSize: 20}} >  {item}
                </Text>
              </TouchableOpacity>
                }
              </View>
            )
          })
        }


        {
          this.state.selected[this.state.quizIndex]==null?
          <View/>
          :
            this.state.selected[this.state.quizIndex]==QuizData[this.state.quizIndex].ca ?
            <View style={{backgroundColor: "green",padding:10}}>
              <Text>
                The answer is correct.
              </Text>
            </View>
            :
            <View>
              <View style={{margin:10,backgroundColor: "#e74c3c",padding:10}} >
              <Text>
                The answer is not correct.
              </Text>
              </View>
              <View style={{margin:10,backgroundColor: "#9b59b6",padding:10}}>
              <Text>
                Correct answer is: {arr2[QuizData[this.state.quizIndex].ca]}
              </Text>
              </View>
            </View>
        }

        {
          QuizData[this.state.quizIndex+1]==null?
          <View style={{flexDirection: 'row',flex: 1, alignItems: 'center', justifyContent: 'center'}} >
        <TouchableOpacity 
        style= {styles.buttonStyle}
        onPress= {()=>{
          this.setState({quizIndex: this.state.quizIndex-1})
        }} >
        <Text>
        Previous
        </Text>
        </TouchableOpacity>
        <TouchableOpacity  
          style= {styles.buttonStyle}
          onPress= {()=>{
        }} >
        <Text>
        Finish
        </Text>
        </TouchableOpacity>
        </View>
          :
            this.state.quizIndex==0?
            <View style={{flexDirection: 'row',flex: 1, alignItems: 'center', justifyContent: 'center'}} >
            <TouchableOpacity 
            style= {styles.buttonStyle}
            onPress= {()=>{
            this.setState({quizIndex: this.state.quizIndex+1})
            }} >
            <Text>
            Next
            </Text>
            </TouchableOpacity>
            </View>
            :
            <View style={{flexDirection: 'row',flex: 1, alignItems: 'center', justifyContent: 'center'}} >
            <TouchableOpacity 
            style= {styles.buttonStyle}
            onPress= {()=>{
              this.setState({quizIndex: this.state.quizIndex-1})
            }} >
            <Text>
            Previous
            </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style= {styles.buttonStyle}
            onPress= {()=>{
            this.setState({quizIndex: this.state.quizIndex+1})
            }} >
            <Text>
            Next
            </Text>
            </TouchableOpacity>
            </View>
          
        }
        
        
        </View>
        )
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle:{
    justifyContent: 'center',
    height: 25,
    borderRadius: 3,
    padding: 25,
    borderWidth:2,
    borderColor: '#747d8c',
    marginHorizontal: 8,
    backgroundColor: '#a4b0be'
  },
});