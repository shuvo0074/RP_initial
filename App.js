import React, { Component } from 'react';
import {Router,Scene,Actions} from 'react-native-router-flux'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Home from './src/components/home'
import Products from './src/components/products'
import DigSystem from './src/components/digSystem'
import Quiz from './src/components/quiz'
import Contact from './src/components/contact'
import About from './src/components/about'
import Help from './src/components/help'

export default class App extends Component<{}> {
  render() {
    return (
      <Router navigationBarStyle={styles.navBar}>
      <Scene key="root" hideNavBar={false}  >
      
      <Scene
      key="home"
      component={Home}
      title="Home"
      initial
      hideNavBar={false}
      />
      
      <Scene
      key="products"
      component={Products}
      title="Products"
      />
      
      <Scene
      key="digSystem"
      component={DigSystem}
      title="Digestive system"
      />
      
      <Scene
      key="quiz"
      component={Quiz}
      title="quiz"
      />
      
      <Scene
      key="contact"
      component={Contact}
      title="contact"
      />

      <Scene
      key="about"
      component={About}
      title="about"
      />

      <Scene
      key="help"
      component={Help}
      title="help"
      />

      </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navBar: {
    marginTop: 23,
    backgroundColor: 'red',
    height: 50
  }
});
