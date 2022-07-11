import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback, ScrollView } from 'react-native'
import { Link, useLocation } from 'react-router-native'
import { Dimensions } from 'react-native';

import StyledText from './styles/StylesText.jsx';
import navLinks  from "./config";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Header = (props) => { 
    return(
      <View style = {styles.container}>
        <View style = {styles.logoContainer}>
          <Text style = {{fontSize: 35, fontWeight: '700', color: '#F7B4B4'}}>R</Text>
          <Text style = {{fontSize: 35, fontWeight: '700', color: '#C8F6C1'}}>G</Text>
          <Text style = {{fontSize: 35, fontWeight: '700', color: '#ACECEC'}}>B</Text>
          <Text style = {{fontSize: 35, fontWeight: '700', color: '#ECECEC', marginLeft: 10}}>Device</Text>
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
    height: 80,
    backgroundColor: 'white',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',  
    alignItems: 'center',
    width: windowWidth,
    height: 80,
    backgroundColor: 'white',
    marginBottom: 5
  },
});



export default Header;