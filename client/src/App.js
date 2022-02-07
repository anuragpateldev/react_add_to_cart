import React from 'react';
import TopBar from './components/TopBar';
import ApNavBar from './components/ApNavBar';
import {Switch,Route} from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import Pizza from './components/Pizza';
import About from './components/About';
import Policy from './components/Policy';
import Contact from './components/Contact';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
 
const App = () =>{
    return (
        <>
        <TopBar/>
        <ApNavBar/>
        <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/about" exact component={About}/>
            <Route path="/policy" exact component={Policy}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/cart" exact component={CartScreen}/>
            <Route path="/login" exact component={LoginScreen}/>
            <Route path="/signup" exact component={SignupScreen}/>
        </Switch>
        </>
    )
};

export default App;