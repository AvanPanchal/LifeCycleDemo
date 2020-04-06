import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet, TouchableOpacity
} from "react-native";
import { Actions } from 'react-native-router-flux';
import Routers from './src/routers/router';
class App extends Component {
  //first this method is called.
  constructor() {
    super();
    this.state = {

    }
    //   console.log('constructor is called.')
    // }
    // static getDerivedStateFromProps(props, state) {
    //   //second this method is called.
    //   console.log("getDerivedStateFromProps called here");
    //   return null;
    // }
    // componentWillMount() {
    //   //Deprecated after RN 0.60
    //   console.log('componentWillMount called.');
    // }
    // componentDidMount() {
    //   //fourth this method is called.
    //   console.log('componentDidMount called.');
    // }

    // componentWillReceiveProps(nextProp) {
    //   //Deprecated after RN 0.60
    //   console.log('componentWillReceiveProps called.', nextProp);
    // }

    // shouldComponentUpdate(nextProp, nextState) {
    //   //fifth this method is called.
    //   console.log('shouldComponentUpdate called.');
    //   return true;
    // }

    // componentWillUpdate(nextProp, nextState) {
    //   //Deprecated after RN 0.60
    //   console.log('componentWillUpdate called.');
    // }

    // componentDidUpdate(prevProp, prevState) {
    //   //seventh this method is called.
    //   console.log('componentDidUpdate called.');
    // }

    // componentWillUnmount() {
    //   //eighth this method is called.
    //   console.log('componentWillUnmount called.');
    // }

    // componentDidCatch(error, info) {
    //   //tenth this method is called.
    //   console.log('componentDidCatch called.');
    // }
    // static getDerivedStateFromError(error) {
    //   //nineth this method is called.
    //   console.log('getDerivedStateFromError Called.')
    // }

    // getSnapshotBeforeUpdate(prevProp, prevState) {
    //   //sixth this method is called.
    //   console.log('getSnapshotBeforeUpdate Called.')
    // }
  }
  render() {
    //third this method is called
    return (
      <View>
        <Routers />
      </View>
    )
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center'
  }
});