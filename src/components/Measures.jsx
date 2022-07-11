import React from 'react'
import { useState, useEffect } from 'react';
import { View, Alert, StyleSheet, Button, TouchableWithoutFeedback, ScrollView } from 'react-native'
import { Dimensions } from 'react-native';

import StyledText from '../styles/StylesText.jsx';
import {navLinks, steps, buttons}  from "../config";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Measures = () => {  

    const [deviceState, setDeviceState] = useState('Decive');

    const instructions = 'Please follow the instructions below:\n - Device: connect device\n - Calibration: device ready to calibration\n - Measure: device ready to measure '
    const device = 'Connect the RGB Decive providing wifi access with your mobile phone. Set this wifi credentials:\n - Name: rgb-device\n - Password: 123456789';
    const calibrate = 'Select the wells you will use by cliking the cicles to calibrate the device and then press "Start Calibration" button';
    const measure = 'Select the wells with samples by clicking the circles and press the "Start Measures" button.';

    handlePress = (name) => {
        if (name == 'Instructions') Alert.alert('Instructions', instructions);
        if (name == 'Device') Alert.alert('Device', device);
        if (name == 'Calibration') Alert.alert('Calibration', calibrate); 
        if (name == 'Measure') Alert.alert('Measure', measure); 
    }

    const selectColor = (name) => {
        if (name == 'Instructions') return "#ECECEC";
        if (name == 'Device') return "#F7B4B4";
        if (name == 'Calibration') return "#C8F6C1";
        if (name == 'Measure') return "#ACECEC";
        if (name == 'Start Calibration') return "#F7B4B4";
        if (name == 'Start Measures') return "#F7B4B4";
    }


    return(
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <View style={styles.buttonsContainer}>
                    {steps.map(({name}, i) => {
                        return (   
                            <View style={styles.buttonSmall} key={i}>
                                <Button
                                    key={i}
                                    title={name}
                                    onPress={()=> handlePress(name)}
                                    color={selectColor(name)}
                                /> 
                            </View>     
                        );
                    })}
                </View>
                <View style={styles.buttonInfoContainer}>
                    <View style={styles.buttonBig} key={4}>
                        <Button
                            key={4}
                            title="Instructions"
                            onPress={()=> this.handlePress("Instructions")}
                            color="#EFEFEF"
                        /> 
                    </View>
                </View>
            </View>
            <View style={styles.wellsContainer}>
                <View style={styles.wells}>
                    
                </View>   
            </View>
            <View style={styles.endButtonsContainer}>
                {buttons.map(({name}, i) => {
                    return (   
                        <View style={styles.buttons} key={i}>
                            <Button
                                key={i}
                                title={name}
                                color={selectColor(name)}
                            /> 
                        </View>     
                    );
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',  
        alignItems: 'center',
        width: windowWidth,
        height: windowHeight - 150,
        backgroundColor: 'white',

    },
    infoContainer: {
        flexDirection: 'column',
        justifyContent: 'center',  
        alignItems: 'center',
        width: windowWidth,
        height: 90,
        backgroundColor: 'white',
    },
    buttonInfoContainer: {
        flexDirection: 'column',
        justifyContent: 'center',  
        alignItems: 'center',
        width: windowWidth,
        height: 45,
        backgroundColor: 'white',
        paddingRight: 25,
        paddingLeft: 25
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',  
        alignItems: 'center',
        width: windowWidth,
        height: 45,
        backgroundColor: 'white',
        paddingLeft: 10 
    },
    buttonBig: {
        width: windowWidth - 50 ,
        height: 40,
    },
    buttonSmall:{
        width: (windowWidth - 40)/3,
        height: 40,
        paddingRight: 10
    },
    wellsContainer: {
        flexDirection: 'column',
        justifyContent: 'center',  
        alignItems: 'center',
        width: windowWidth,
        height: windowHeight - 230 - 70,
        backgroundColor: 'white',
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 5
    },
    wells: {
        flexDirection: 'column',
        justifyContent: 'center',  
        alignItems: 'center',
        width: windowWidth - 50,
        height: windowHeight - 300,
        backgroundColor: '#FFF8F8',
        borderRadius: 10
    },
    endButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',  
        alignItems: 'center',
        width: windowWidth,
        height: 70,
        backgroundColor: 'white',

        paddingLeft: 20

    },
    buttons:{
        width: (windowWidth - 35)/2,
        height: 40,
        paddingRight: 20

    },
});

export default Measures;