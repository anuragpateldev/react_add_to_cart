import React from 'react';
import './ApNavBar.css';
import { NavLink , useHistory } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';

import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Dropdown } from 'react-bootstrap';
import { logoutUser } from '../actions/userAction'; 
 
const ApNavBar = () =>{
    const dispatch = useDispatch();
    const cartState = useSelector(state=>state.cartReducer);
    console.log('cartState ==>',cartState);

    const {currentUser} = useSelector(state=>state.loginUserReducer);
    console.log('currentUser',currentUser);

    const history = useHistory();
    const logoutHandler = () =>{
        console.log('logoutHandler');
        dispatch(logoutUser());
    }

    return (
        <div className='ap__navbar'>
            <div className='ap__navbar_left' style={{height:'50px'}}>

            </div>
            <div className='ap__navbar_right'>
                { currentUser  ? (
                     <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {currentUser.name}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/order">Order</Dropdown.Item>
                            <Dropdown.Item href="#" onClick={(e)=>logoutHandler(e)}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                ) : (
                    <>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/signup">Signup</NavLink>
                    </>
                )}
                
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