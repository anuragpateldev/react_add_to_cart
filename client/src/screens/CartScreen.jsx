import React ,{useEffect} from 'react';
import './CartScreen.css';
import {useSelector} from 'react-redux';
import { Row , Col , Button } from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { addToCart , deleteFromCart , removeCartItem } from '../actions/cartAction';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import ApCheckout from '../components/ApCheckout';
 
const CartScreen = () =>{
    const cartState = useSelector(state=>state.cartReducer);
    const cartItems = cartState.cartItems;
    console.log('cartItems ==>',cartItems);

    const subTotal = cartItems.reduce( (total,item)=> total+item.price,0);
 
    const dispatch = useDispatch();

    const incrementHander = (pizza,qty,varient) =>{
        dispatch(addToCart(pizza,qty,varient));
    } 

    const decrementHander = (pizza,qty,varient)  =>{
        console.log('decrementHander');
        dispatch(addToCart(pizza,qty,varient));
    }

    const btnDeleteCartHandler = (e) =>{
        console.log('btnDeleteCartHandler');
        dispatch(deleteFromCart());
    }

    const removeCartItemHander = (pizza) =>{
        console.log('removeCartItemHander');
        console.log('pizza ==>',pizza);
        dispatch(removeCartItem(pizza));
    }

    return (
        <Row style={{marginTop:'70px'}}>
            <Col x6={5} style={{marginLeft:'230px'}}>
            <h3>My Cart <button onClick={(e)=>btnDeleteCartHandler(e)} className="removeCartBtn">Clear Cart</button></h3>
                {cartItems.map( (currEle,index) =>(
                    <Row key={currEle._id}>
                        <Col x6={6}>
                            <p>{currEle.name}</p>
                            <p>Price: {currEle.quantity} x {currEle.price}</p>
                            <p>Quantity : <RemoveIcon onClick={(e)=>decrementHander(currEle,(currEle.quantity - 1),currEle.varient)}  className="minus_counter"/> &nbsp;{currEle.quantity} &nbsp; 
                            <AddIcon onClick={(e)=>incrementHander(currEle,(currEle.quantity + 1),currEle.varient)} className="plus_counter"/></p>
                        </Col>
                        <Col x6={6}>
                            <p><img src={currEle.image} style={{width:'90%'}}/><DeleteIcon style={{cursor:'pointer'}} onClick={(e)=>removeCartItemHander(currEle)}/></p>
                        </Col>
                        <hr/>
                    </Row>
                ))}
            </Col>
            <Col x6={5}>
                <h3>Payment Info</h3>
                <h5>SubTotal: Rs {subTotal} -/</h5>
                <ApCheckout subTotal={subTotal}/>
            </Col>
        </Row>
    );
}

export default CartScreen;