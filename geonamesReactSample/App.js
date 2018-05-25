import React, {Component} from "react";
import {StyleSheet} from "react-native";
import {StackNavigator} from "react-navigation";
import {HomePage} from "./src/HomePage"
import {CountryDetailsPage} from "./src/CountryDetailsPage"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

const RootStack = StackNavigator(
  {
    Home: HomePage,
    Details: CountryDetailsPage
  },
  {
    initialRouteName: 'Home'
  }
);

export default class App extends Component {
  render() {
    return <RootStack/>;
  }
}