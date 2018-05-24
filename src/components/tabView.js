import React from 'react';
import { View,Text, StyleSheet,WebView , Dimensions,Image } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import QCard from './qCard'
import Quiz from './quiz'
var disease = require('../contents/htmlpages/ge_system.html')

var ind = null
const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};
const FirstRoute = () => 
<View style={[ styles.container, { backgroundColor: 'white' } ]} >
<WebView
        source={ind}
        style={{flex: 1,}}
      />
</View>

const SecondRoute = () => <View style={[ styles.container, { backgroundColor: 'white' } ]} >
<QCard/>
</View>
const ThirdRoute = () => 
<View style={[ styles.container, { backgroundColor: 'white' } ]} >
<Quiz/>
</View>
;

export default class tabView extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Details' },
      { key: 'second', title: 'QCard' },
      { key: 'third', title: 'Quiz' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  render() {
    ind = this.props.id
    return (
    <View style ={{flex:1}} >
    <View style = {{height : 70,marginTop: 25,backgroundColor: 'white',alignItems: 'center'}} >
        <Image
        source= {require('../contents/productImages/antif.jpg')}
        style={{backgroundColor: 'white',flex: 1,}}
        />
    </View>
    <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
    >
    </TabViewAnimated>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});