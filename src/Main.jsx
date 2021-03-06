
import React from 'react'
import { Text, View } from 'react-native'
import { Redirect, Route, Switch } from 'react-router-native'
import Constants from 'expo-constants';

import Header from './Header.jsx'
import AppBar from './AppBar.jsx'
import Measures from './components/Measures.jsx'
import History from './components/History.jsx'
import Footer from './Footer.jsx'

const Main = () => {
    return (
        <View style={{ marginTop: Constants.statusBarHeight, flex: 1 }}>
            <Header/>
            <Switch>
                <Route path='/measures' exact>
                   <Measures/>
                </Route>
                <Route path='/history' exact>
                    <History/>
                </Route>
                <Redirect to='/measures' />
            </Switch>
            <AppBar />
    </View>
    )
}

export default Main;