import React from 'react';
import { View,Text, StyleSheet,Image,FlatList,TouchableOpacity, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import QuizData from '../data/quizData'
import { Button } from 'react-native-elements';

var notSelIcon = require('../contents/quiz/quizNotSelected.png')
var selIcon = require('../contents/quiz/quizSelected.png')
var arr=[]
export default class quiz extends React.Component {
  
  state = {
    quizIndex: 0,
    selected: [],
    checked: null,

  };
  render() {
    if (QuizData[this.state.quizIndex+1]==null) {
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
          QuizData[this.state.quizIndex].answer.split("~~").map((item,index)=>{
            return(
              <View>
                {this.state.selected[this.state.quizIndex]==index ?
                <TouchableOpacity
                style={{ flexDirection: 'row'}}
                
                >
                  <Image 
                  source={require('../contents/quiz/quizSelected.png')} 
                  style= {{height: 20, width: 20,}}
                  />
                  <Text style={{fontWeight: 'bold', fontSize: 20}} >  {item}   selected: {this.state.selected[this.state.quizIndex]}
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
                style= {{height: 20, width: 20, }}
                />
                <Text style={{fontWeight: 'bold', fontSize: 20}} >  {item}
                </Text>
              </TouchableOpacity>
                }
              </View>
            )
          })
        }


        <View style={{flexDirection: 'row',flex: 1, alignItems: 'center', justifyContent: 'center'}} >
        <Button title="previous" 
        style= {{marginHorizontal: 25,}}
        onPress= {()=>{
          this.setState({quizIndex: this.state.quizIndex-1})
        }} />
        <Button title="Finish" 
          style= {{marginHorizontal: 25,}}
          onPress= {()=>{
        }} />
        </View>
        </View>
        )
    }
    else if (this.state.quizIndex==0){
      return (
        <View style ={{flex:1,paddingHorizontal: 20, justifyContent: 'center',backgroundColor: 'white',}} >
        <View style={{backgroundColor: '#bdc3c7', margin : 10,marginTop:40, padding: 5,}} >
          <Text style={{fontWeight: 'bold'}} >
            Question {this.state.quizIndex+1} of {QuizData.length}
          </Text>
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 18}} >
          {QuizData[this.state.quizIndex].question}
        </Text>
        

        {
          QuizData[this.state.quizIndex].answer.split("~~").map((item,index)=>{
            return(
              <View>
                {this.state.selected[this.state.quizIndex]==index ?
                <TouchableOpacity
                style={{ flexDirection: 'row'}}
                
                >
                  <Image 
                  source={require('../contents/quiz/quizSelected.png')} 
                  style= {{height: 20, width: 20,}}
                  />
                  <Text style={{fontWeight: 'bold', fontSize: 20}} >  {item}   selected: {this.state.selected[this.state.quizIndex]}
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
                style= {{height: 20, width: 20, }}
                />
                <Text style={{fontWeight: 'bold', fontSize: 20}} >  {item}  
                </Text>
              </TouchableOpacity>
                }
              </View>
            )
          })
        }


        <View style={{flexDirection: 'row',flex: 1, alignItems: 'center', justifyContent: 'flex-end'}} >
        <Button title="Next" 
          style= {{marginHorizontal: 25,}}
          onPress= {()=>{
            this.setState({quizIndex: this.state.quizIndex+1})
        }} />
        </View>
        </View>
        )
    }
    return (
    <View style ={{flex:1,paddingHorizontal: 20, justifyContent: 'center',backgroundColor: 'white',}} >
    <View style={{backgroundColor: '#bdc3c7',marginTop:40, margin : 10, padding: 5,}} >
      <Text style={{fontWeight: 'bold'}} >
        Question {this.state.quizIndex+1} of {QuizData.length}
      </Text>
    </View>
    <Text style={{fontWeight: 'bold', fontSize: 18}} >
      {QuizData[this.state.quizIndex].question}
    </Text>
    
    {
          QuizData[this.state.quizIndex].answer.split("~~").map((item,index)=>{
            return(
              <View>
                {this.state.selected[this.state.quizIndex]==index ?
                <TouchableOpacity
                style={{ flexDirection: 'row'}}
                
                >
                  <Image 
                  source={require('../contents/quiz/quizSelected.png')} 
                  style= {{height: 20, width: 20,}}
                  />
                  <Text style={{fontWeight: 'bold', fontSize: 20}} >  {item}   selected: {this.state.selected[this.state.quizIndex]}
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
                style= {{height: 20, width: 20, }}
                />
                <Text style={{fontWeight: 'bold', fontSize: 20}} >  {item}
                </Text>
              </TouchableOpacity>
                }
              </View>
            )
          })
        }

    <View style={{flexDirection: 'row',flex: 1, alignItems: 'center', justifyContent: 'center'}} >
    <Button title="previous" 
    style= {{marginHorizontal: 25,}}
    onPress= {()=>{
        this.setState({quizIndex: this.state.quizIndex-1})
    }} />
    <Button title="Next" 
      style= {{marginHorizontal: 25,}}
      onPress= {()=>{
      this.setState({quizIndex: this.state.quizIndex+1})
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
  },
});