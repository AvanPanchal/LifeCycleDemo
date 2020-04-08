import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, TouchableOpacity
} from "react-native";
import { Actions } from 'react-native-router-flux';

class InitialScreen extends Component {
    //first this method is called.
    constructor() {
        super();
        this.state = {

        }
        console.log('constructor is called.')
    }
    static getDerivedStateFromProps(props, state) {
        //second this method is called.
        console.log("getDerivedStateFromProps called here");
        return null;
    }
    componentWillMount() {
        //Deprecated after RN 0.60
        console.log('componentWillMount called.');
    }
    componentDidMount() {
        //fourth this method is called.
        console.log('componentDidMount called.');
    }

    componentWillReceiveProps(nextProp) {
        //Deprecated after RN 0.60
        console.log('componentWillReceiveProps called.', nextProp);
    }

    shouldComponentUpdate(nextProp, nextState) {
        //fifth this method is called.
        console.log('shouldComponentUpdate called.');
        return true;
    }

    componentWillUpdate(nextProp, nextState) {
        //Deprecated after RN 0.60
        console.log('componentWillUpdate called.');
    }

    componentDidUpdate(prevProp, prevState) {
        //seventh this method is called.
        console.log('componentDidUpdate called.');
    }

    componentWillUnmount() {
        //eighth this method is called.
        console.log('componentWillUnmount called.');
    }

    componentDidCatch(error, info) {
        //tenth this method is called.
        console.log('componentDidCatch called.');
    }
    static getDerivedStateFromError(error) {
        //nineth this method is called.
        console.log('getDerivedStateFromError Called.')
    }

    getSnapshotBeforeUpdate(prevProp, prevState) {
        //sixth this method is called.
        console.log('getSnapshotBeforeUpdate Called.')
    }
    render() {
        //third this method is called
        return (
            <View style={styles.container}>
                <Text>InitialScreen</Text>
                <TouchableOpacity
                    style={{ minWidth: 150, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2AC062', display: 'flex', borderRadius: 5, shadowColor: '#2AC062', shadowOpacity: 0.4, shadowRadius: 20, shadowOffset: { height: 10, width: 5 }, }}
                    onPress={() => Actions.screen1()}>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Go to Screen1</Text>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity
                        style={{ minWidth: 150, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#4dd', display: 'flex', borderRadius: 5, shadowColor: '#2AC062', shadowOpacity: 0.4, shadowRadius: 20, shadowOffset: { height: 10, width: 5 }, }}
                        onPress={() => Actions.screen2()}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Go to Screen2</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default InitialScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center'
    }
});