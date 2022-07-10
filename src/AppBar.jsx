import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import { Link, useLocation } from 'react-router-native'
import { Dimensions } from 'react-native';

import StyledText from './styles/StylesText.jsx';
import navLinks  from "./config";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AppBarTab = ({active, children, to}) => {
  return (
    <Link style = {styles.tab} to={to}>
      <StyledText>
         {children}
      </StyledText>
    </Link>
  )
}

const AppBar = (props) => { 
    return(
      <View style = {styles.container}>
        <View style = {styles.logoContainer}>
          <StyledText>RGB device</StyledText>
        </View>
        <View style = {styles.navLinksContainer}>
            <AppBarTab  active to='/measures'>Measures</AppBarTab>
            <AppBarTab  active to='/history'>History</AppBarTab>
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
    height: 100,
    backgroundColor: 'white',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',  
    alignItems: 'center',
    width: windowWidth,
    height: 45,
    backgroundColor: 'white',
  },
  navLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',  
    alignItems: 'flex-start',
    height: 45,
    backgroundColor: 'white',
    paddingLeft: 25
  },
  tab: {
    flexDirection: 'column',
    justifyContent: 'center',  
    alignItems: 'center',
    width: windowWidth/2 - 50,
    height: 45,
    backgroundColor: '#eeeeee',
    
  }
});



export default AppBar;