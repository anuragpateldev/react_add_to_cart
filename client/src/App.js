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
import OrderScreen from './screens/OrderScreen';
import AdminScreen from './screens/AdminScreen';
 
const App = () =>{
    return (
        <>
        <TopBar/>
        <ApNavBar/>
        <Switch>
            <Route path="/admin"  component={AdminScreen} />
            <Route path="/" exact component={HomeScreen} />
            <Route path="/about" exact component={About}/>
            <Route path="/policy" exact component={Policy}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/cart" exact component={CartScreen}/>
            <Route path="/login" exact component={LoginScreen}/>
            <Route path="/signup" exact component={SignupScreen}/>
            <Route path="/order" exact component={OrderScreen}/>
        </Switch>
        </>
    )
};

export default App;