import React from 'react';
import './ApNavBar.css';
import { NavLink } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';

import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const ApNavBar = () =>{
    const dispatch = useDispatch();
    const cartState = useSelector(state=>state.cartReducer);

    console.log('cartState ==>',cartState);
    return (
        <div className='ap__navbar'>
            <div className='ap__navbar_left' style={{height:'50px'}}>

            </div>
            <div className='ap__navbar_right'>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
                <NavLink to="/cart">
                <Badge badgeContent={cartState.cartItems.length} color="primary">
                    <ShoppingCartIcon/>
                </Badge>
                 </NavLink>
            </div>
        </div>
    )
}

export default ApNavBar;