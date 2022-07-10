import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import { Link, useLocation } from 'react-router-native'
import { Dimensions } from 'react-native';

import StyledText from './styles/StylesText.jsx';
import navLinks  from "./config";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',  
    alignItems: 'center',
    width: windowWidth,
    height: 50,
    backgroundColor: '#eeeeee',
  },
});



const Footer = (props) => { 
    return(
      <View style = {styles.container}>
        <StyledText>Designed by Adrián Vizcaino</StyledText>
      </View>
    )
}

export default Footer;