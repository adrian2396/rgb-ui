
import React from 'react'
import { Text, View } from 'react-native'
import AppBar from './AppBar.jsx'
import Constants from 'expo-constants';
import { Redirect, Route, Switch } from 'react-router-native'


const Main = () => {
    return (
        <View style={{ marginTop: Constants.statusBarHeight,flex: 1 }}>
        <AppBar />
        <Switch>
            <Route path='/measures' exact>
                <Text>Measures Route</Text>
            </Route>
            <Route path='/history' exact>
                <Text>History Route</Text>
            </Route>
            <Redirect to='/measures' />
        </Switch>
    </View>
    )
}

export default Main;