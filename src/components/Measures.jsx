import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { View, Alert, StyleSheet, Button, TouchableOpacity , Pressable , ScrollView } from 'react-native'
import { Dimensions } from 'react-native';

import StyledText from '../styles/StylesText.jsx';
import {navLinks, steps, buttons, nWells}  from "../config";
import AppBar from '../AppBar'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Measures = () => {  

    const [deviceState, setDeviceState] = useState('Device');
    const [wellState, seWellState] = useState(true);
    var ws = useRef(new WebSocket('ws://w567l.sse.codesandbox.io/')).current;

    const instructions = 'Please follow the instructions below:\n - Device: connect device\n - Calibration: device ready to calibration\n - Measure: device ready to measure '
    const device = 'Connect the RGB Decive providing wifi access with your mobile phone. Then, you will be able to calibrate the device. Set this wifi credentials:\n - Name: rgb-device\n - Password: 123456789';
    const calibrate = 'Select the wells you will use by cliking the cicles to calibrate the device and then press "Start Calibration" button';
    const measure = 'Select the wells with samples by clicking the circles and press the "Start Measures" button.';

    /*useEffect(() => {
        const serverMessagesList = [];
        ws.onopen = () => {
          setServerState('Connected to the server')
          setDisableButton(false);
        };
        ws.onclose = (e) => {
          setServerState('Disconnected. Check internet or server.')
          setDisableButton(true);
        };
        ws.onerror = (e) => {
          setServerState(e.message);
        };
        ws.onmessage = (e) => {
          serverMessagesList.push(e.data);
          setServerMessages([...serverMessagesList])
        };
      }, [])
      const submitMessage = () => {
        ws.send(messageText);
        setMessageText('')
        setInputFieldEmpty(true)
      }*/


    function Wells (){
        return(
            <Pressable 
                style={{ borderRadius:40}}
                color="#EFEFEF"
            />
        )
    }

    const selectColor =  (name) => {
        if (name == 'Instructions') return '#ECECEC';

        if (name == 'Device') {
            if (deviceState == 'Device') return '#F7B4B4';
            else return 'blue';
        }            
        if (name == 'Calibration') {
            if (deviceState == 'Calibration') return 'claro';
            else return '#C8F6C1';
        }            
        if (name == 'Measure') {
            if (deviceState == 'Measures' )return'claro';
            else return'#ACECEC';
        }            
        if (name == 'Start Calibration') {
            if (deviceState == 'Calibration' ) return 'verde';
            else return '#F7B4B4';
        }    
        if (name == 'Start Measures') {
            if (deviceState == 'Measures' ) return 'verde';
            else return '#F7B4B4';
        }  
    }

    const handlePress = (name) => {
        if (name == 'Instructions') Alert.alert('Instructions', instructions);
        if (name == 'Device' && deviceState == 'Device') Alert.alert('Device', device);
        if (name == 'Calibration' && deviceState == 'Device') Alert.alert('Calibration', calibrate); 
        if (name == 'Measure' && deviceState == 'Measure') Alert.alert('Measure', measure); 
    }

    const handlePressWell = () => {
        console.log('well pressed');
        
    }


    // Handle 'Start Calibration button'
    const handleCalibration = () => {
        console.log('press calibration')
    }

    // Handle 'Start Measures button'
    const handleMeasures = () => {
        console.log('press measures')
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
                                    buttonStyle={styles.buttonSmall}
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
                            onPress={()=> handlePress('Instructions')}
                            color="#EFEFEF"
                        /> 
                    </View>
                </View>
            </View>
            <View style={styles.wellsContainer}>
                <View style={styles.wells}>
                    {nWells.map(({name},i) => 
                        {return (
                            <View style={styles.well} key={i.toString()}>
                                <Wells title={name} nkey={i.toString()} onPress={handlePressWell()}></Wells>
                            </View>
                        )}
                    )}
                </View>   
            </View>
            <View style={styles.endButtonsContainer}>
                <View style={styles.buttons} key={1}>
                    <Button
                        key={5}
                        title={'Start Calibration'}
                        color={selectColor('Start Calibration')}
                        onPress={() => handleCalibration()}
                    /> 
                </View>   
                <View style={styles.buttons} key={2}>
                    <Button
                        key={6}
                        title={'Start Measures'}
                        color={selectColor('Start Measures')}
                        onPress={() => handleMeasures()}
                    /> 
                </View> 
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
        height: (windowHeight/7)*5.5,
        backgroundColor: 'white',
    },
    infoContainer: {
        flexDirection: 'column',
        justifyContent: 'center',  
        alignItems: 'center',
        width: '100%',
        height: (windowHeight/7),
        backgroundColor: 'white',
    },
    buttonInfoContainer: {
        flexDirection: 'column',
        justifyContent: 'center',  
        alignItems: 'center',
        width: '100%',
        height: (windowHeight/7)/2,
        backgroundColor: 'white',
        paddingRight: '5%',
        paddingLeft: '5%'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',  
        alignItems: 'center',
        width: '100%',
        height: (windowHeight/7)/2,
        backgroundColor: 'white',
        paddingLeft: '5%' ,
        paddingRight: '5%'
    },
    buttonBig: {
        width: '100%',
        height:(windowHeight/7)/2,
    },
    buttonSmall:{
        width: 110,
        height: (windowHeight/7)/2,
    },
    wellsContainer: {
        flexDirection: 'column',
        justifyContent: 'center',  
        alignItems: 'center',
        width: windowWidth,
        height: (windowHeight/7)*4,
        backgroundColor: 'white',
        paddingRight: '5%',
        paddingLeft: '5%',
        paddingTop: 5
    },
    wells: {
        flexDirection: 'row',
        justifyContent: 'center',  
        alignItems: 'center',
        flexWrap: 'wrap',
        width:'70%',
        height: (windowHeight/7)*4,
        backgroundColor: '#FFF8F8',
        borderRadius: 10,
        marginBottom: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    well: {
        width: 70,
        height: 70,
        backgroundColor: '#F7B4B4',
        marginLeft: 20,
        marginRight: 20


    },
    endButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',  
        alignItems: 'center',
        width: windowWidth,
        height: (windowHeight/7)/2,
        backgroundColor: 'white',
        paddingRight: '5%',
        paddingLeft: '5%',

    },
    buttons:{
        width: 'auto',
        height: 40,
        paddingRight: 20

    },
});

export default Measures;