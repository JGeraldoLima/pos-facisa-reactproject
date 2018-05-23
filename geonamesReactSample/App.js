/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux'
import HomePage from "./src/HomePage";

export default class App extends Component<Props> {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='home' component={HomePage} title='HOME'/>
        </Scene>
      </Router>
    );
  }
}