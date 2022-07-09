import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import { Link, useLocation } from 'react-router-native'

import StyledText from './styles/StylesText.jsx';
import navLinks  from "../config";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',  
      width: 20,
      height: 20,
      backgroundColor: '#0000',
    },
});

const AppBarTab = ({active, children, to}) => {
  return (
    <Link to={to}>
      <StyledText>
         {children}
      </StyledText>
    </Link>
  )
}


const AppBar = () => { 
    return(
        <View sytle={styles.container}>
          <AppBarTab active to='/measures'>Measures</AppBarTab>
          <AppBarTab active to='/history'>History</AppBarTab>
        </View>
    )
}

export default AppBar;