import React from 'react';
import './CartScreen.css';
import {useSelector} from 'react-redux';
import {Row,Col} from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const CartScreen = () =>{
    const cartState = useSelector(state=>state.cartReducer);
    const cartItems = cartState.cartItems;
    console.log('cartItems ==>',cartItems);

    return (
        <Row style={{marginTop:'70px'}}>
            <Col x6={5} style={{marginLeft:'230px'}}>
            <h3>My Cart</h3>
                {cartItems.map( (currEle,index) =>(
                    <Row>
                        
                        <Col x6={6}>
                            <p>{currEle.name}</p>
                            <p>Price: {currEle.quantity} x {currEle.price}</p>
                            <p>Quantity : <RemoveIcon className="minus_counter"/> &nbsp;{currEle.quantity} &nbsp; <AddIcon className="plus_counter"/></p>
                        </Col>
                        <Col x6={6}>
                            <p><img src={currEle.image} style={{width:'100%'}}/></p>
                        </Col>
                        <hr/>
                    </Row>
                ))}
            </Col>
            <Col x6={5}>
                    
            </Col>
        </Row>
    );
}

export default CartScreen;