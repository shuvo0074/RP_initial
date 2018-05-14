import React from 'react';
import { View,Text, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () => <View style={[ styles.container, { backgroundColor: 'white' } ]} />;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: 'white' } ]} />;
const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: 'white' } ]} />;

export default class digSystem extends React.Component {
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
    return (
    <View style ={{flex:1}} >
    <View style = {{height : 50,marginTop: 20}} >
        <Text> Some random text
            </Text>
    </View>
    <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
    >
    jdjkkjkjllkjsdjk
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