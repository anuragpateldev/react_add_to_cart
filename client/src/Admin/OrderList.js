import React , {useEffect} from 'react';
import { Container , Row , Col , Button , ButtonGroup ,Table} from 'react-bootstrap';
import { getAllOrders , deliveredOrder } from '../actions/orderAction';
import { useDispatch , useSelector } from 'react-redux';
 
const OrderList = () =>{
    const orderState = useSelector(state=>state.getAllOrderReducers);
    console.log('orderState ==>',orderState);

    const orders = orderState.orders;
    console.log('orders ==>',orders);
 
    const dispatch = useDispatch();
    useEffect( ()=>{
        dispatch(getAllOrders());
    },[dispatch]);

    const deliveredOrderHandler = (orderid) =>{
        console.log('deliveredOrderHandler ==>',orderid);
       dispatch(deliveredOrder(orderid));
    }

    return (
        <>
        <h3>Order List</h3>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Order Amount</th>
                    <th>Order Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { orders && orders.map( (order) =>(
                    <tr key={order._id}>
                        <td>1</td>
                        <td>{order.name}</td>
                        <td>{order.email}</td>
                        <td>${order.orderAmount}</td>
                        <td>{order.createdAt}</td>
                        <td>{order.isDeliverd ? (<Button onClick={(e)=>deliveredOrderHandler(order._id)}>Deliverd</Button>) : (<Button onClick={(e)=>deliveredOrderHandler(order._id)}>NotDeliverd</Button>) }</td>
                    </tr>
                ))}
            </tbody>
            </Table>
            </>
    )
}

export default OrderList;