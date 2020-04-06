import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

class App extends Component {
  constructor() {
    super();
    console.log('constructor is called.')
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps called here");
    return null;
  }
  componentWillMount() {
    //Deprecated after RN 0.60
    console.log('componentWillMount called.');
  }
  componentDidMount() {
    console.log('componentDidMount called.');
  }

  componentWillReceiveProps(nextProp) {
    //Deprecated after RN 0.60
    console.log('componentWillReceiveProps called.', nextProp);
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log('shouldComponentUpdate called.');
    return true;
  }

  componentWillUpdate(nextProp, nextState) {
    //Deprecated after RN 0.60
    console.log('componentWillUpdate called.');
  }

  componentDidUpdate(prevProp, prevState) {
    console.log('componentDidUpdate called.');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called.');
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch called.');
  }
  getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError Called.')
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log('getSnapshotBeforeUpdate Called.')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Lifecycle App</Text>
      </View>
    );
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