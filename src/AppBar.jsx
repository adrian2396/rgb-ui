import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import { Link, useLocation } from 'react-router-native'
import { Dimensions } from 'react-native';

import StyledText from './styles/StylesText.jsx';
import navLinks  from "./config";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AppBarTab = ({active, children, to}) => {
  return (
    <Link style = {styles.tab} to={to}>
      <Text style = {styles.text}>
         {children}
      </Text>
    </Link>
  )
}

const AppBar = (props) => { 
    return(
      <View style = {styles.container}>
        <View style = {styles.navLinksContainer}>
            <AppBarTab  active to='/measures'>MEASURES</AppBarTab>
            <AppBarTab  active to='/history'>HISTORY</AppBarTab>
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
    height: 40,
    backgroundColor: 'white',
    paddingLeft: 25,
    paddingRight: 25
  },
  navLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',  
    alignItems: 'flex-start',
    width: windowWidth - 50,
    height: 40,
    backgroundColor: '#ECECEC',
    borderRadius: 10,

    marginBottom: 5
  },
  tab: {
    flexDirection: 'column',
    justifyContent: 'center',  
    alignItems: 'center',
    width: (windowWidth - 70)/2,
    height: 40,
    backgroundColor: '#ECECEC',
    borderRadius: 5
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500'
  }
});



export default AppBar;