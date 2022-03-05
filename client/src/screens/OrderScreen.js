import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../actions/orderAction';
import { Row , Col , Container } from 'react-bootstrap';

const OrderScreen = () =>{

    const dispatch = useDispatch();

    const orderState = useSelector(state =>state.getUserOrdersReducer);
    console.log('order screen ==>',orderState);
    const { loading , success , orders } = orderState;

    console.log('ap test ==>',orders);

    useEffect( ()=>{
        dispatch(getUserOrders());
    },[]);
    return (
        <Container style={{marginTop:'40px'}}>
         { orders && orders.map( currEle => (
            <Row key={currEle._id}>
            <Col><h3>Items:</h3>{ currEle.orderItems && currEle.orderItems.map( (order)=>(
                <div key={order._id}>
                    <h6>{order.name}</h6>
                    <p>[{order.varient}] x {order.quantity} = $ {order.quantity * order.price} </p>
                </div>
            ))}</Col>
            <Col><h3>Address</h3>
            <p style={{margin:'1px'}}><strong>Country</strong>: {currEle.shippingAddress.country}</p>
            <p style={{margin:'1px'}}><strong>City</strong>: {currEle.shippingAddress.city}</p>
            <p style={{margin:'1px'}}><strong>Pincode</strong>: {currEle.shippingAddress.pincode}</p>
            <p style={{margin:'1px'}}><strong>Street</strong>: {currEle.shippingAddress.street}</p>
            </Col>
            <Col>
            <h3>Order Info</h3>
            <p style={{margin:'1px'}}><strong>Order Amount</strong>: {currEle.orderAmount}</p>
            <p style={{margin:'1px'}}><strong>Transaction Id</strong>: {currEle.transectionId}</p>
            <p style={{margin:'1px'}}><strong>Order ID</strong>: {currEle._id}</p>
            </Col></Row>
        )) }
        </Container>
    )
}

export default OrderScreen;