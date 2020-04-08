import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, TouchableOpacity
} from "react-native";
import { Actions } from 'react-native-router-flux';

class Screen1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Screen1</Text>
                <TouchableOpacity
                    style={{ minWidth: 150, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2AC062', display: 'flex', borderRadius: 5, shadowColor: '#2AC062', shadowOpacity: 0.4, shadowRadius: 20, shadowOffset: { height: 10, width: 5 }, }}
                    onPress={() => Actions.pop()}>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Screen1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow'
    }
});