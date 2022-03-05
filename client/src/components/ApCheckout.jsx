import React from 'react';
import { Button } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import { STRIPE_PUBLISH_KEY , STRIPE_SECRET_KEY } from '../../src/StripeConfig';
import { placeOrder } from '../actions/orderAction';
import { useDispatch, useSelector } from 'react-redux';

import ApLoader from '../components/ApLoader';
import ApSuccess from '../components/ApSuccess';
import ApError from '../components/ApError';

const ApCheckout = ({subTotal}) =>{
    const orderState = useSelector(state=>state.placeOrderReducer);
    console.log('orderState ==>',orderState);
    const { loading , error , success } = orderState;

    const dispatch = useDispatch();
    const tokenHandler = (token) =>{
        console.log('token ==>',token);
        console.log('tokenHandler');
        dispatch(placeOrder(token,subTotal));
    }
    
    return ( 
        <>
        { loading && (<ApLoader />)}
        { error && (<ApError error="Something went wrong"/>)}
        { success && (<ApSuccess success="order Placed"/>)}
        
        <StripeCheckout
            token={tokenHandler}
            stripeKey={STRIPE_PUBLISH_KEY}
            shippingAddress
            amount = {subTotal * 100}
            >
            <Button>Pay Now {subTotal}</Button>
        </StripeCheckout>
        </>
    )
}

export default ApCheckout;