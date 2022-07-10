import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import { Dimensions } from 'react-native';

import StyledText from '../styles/StylesText.jsx';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',  
        alignItems: 'center',
        width: windowWidth,
        height: windowHeight - 150,
        backgroundColor: '#fffff',

    },
    calendarContainer: {

    },
    dataContainer: {

    }
});

const History = () => {
    return(
        <View style={styles.container}>
            <StyledText>History Menu</StyledText>
        </View>
    )
}

export default History;