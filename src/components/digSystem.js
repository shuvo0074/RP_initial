import React from 'react';
import { View,Text, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import QCard from './qCard'
import TabView from './tabView'

export default class digSystem extends React.Component {
  
  render() {
    return (
    <TabView />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});