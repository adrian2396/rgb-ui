import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import { Link, useLocation } from 'react-router-native'
import { Dimensions } from 'react-native';

import StyledText from './styles/StylesText.jsx';
import  {nWells}  from "./config";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const selectColor = (name) => {

}

const Well = ({i, id, name}) => {
  return (
    <View key={i}>
        <Button
            key={i}
            title={name}
            color={selectColor(name)}>
        </Button>
    </View>
  )
}

const Wells = () => { 
    return(
      <View style = {styles.container}>
        {buttons.map(({id, name}, i) => {
            return (   
                <Wells id name></Wells>    
            );
        })}
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',  
    alignItems: 'center',
    width: 'auto',
    height: 40,
    backgroundColor: 'white',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
});



export default Wells;