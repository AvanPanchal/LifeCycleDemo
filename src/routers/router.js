import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Screen1 from '../screens/screen1';
import Screen2 from '../screens/screen2';
import Initialscreen from '../screens/initialScreen';
import { Router, Stack, Scene } from 'react-native-router-flux';

class Routers extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene
                        key="initial"
                        component={Initialscreen}
                        title="Initialscreen"
                        initial
                    />
                    <Scene
                        key="screen1"
                        component={Screen1}
                        title="Screen1"
                    />
                    <Scene
                        key="screen2"
                        component={Screen2}
                        title="Screen2"
                    />
                </Scene>
            </Router>
        );
    }
}
export default Routers;