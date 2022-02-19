import React ,{useState} from 'react';
import './Pizza.css';
import {Card,Button,Row,Col,Modal} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import { addToCart } from '../actions/cartAction';

const Pizza = ({pizza}) =>{
    const [varient,setVarient] = useState("small");
    const [show, setShow] = useState(false);
    const [quantity,setQuantity] = useState(1);
    //const [show,setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const addToCartHandler = () =>{
        dispatch(addToCart(pizza,quantity,varient));
    }

    const changeQty =(e)=>{
        console.log('changeQty');
        const qty = e.target.value;
        setQuantity(Number(qty));
    }

    const qty_arr = [1,2,3,4,5,6,7,8,9,10];
    return (
        <Card style={{ width: '18rem',marginTop:'30px' }}>
            <Card.Img variant="top" src={pizza.image} style={{height:'250px'}} onClick={handleShow}/>
            <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                    <Row>
                        <Col md={6}>
                            Variant
                            <select>
                                {pizza.varients.map( (variant,ind)=>(
                                    <option key={`index_${ind}`} value={variant}>{variant}</option>
                                ))}
                            </select>
                        </Col>
                        <Col md={6}>Quantity<br/>
                        <select onChange={(e)=>changeQty(e)}>
                            {
                                qty_arr.map( (v,i)=>(
                                    <option key={`index_${i}`} value={v}>{v}</option>
                                ))
                            }
                        </select>
                        </Col>
                    </Row>
                <Row style={{marginTop:'30px'}}>
                        <Col md={6}>Price : 399 /- Rs</Col>
                        <Col md={6}><button onClick={addToCartHandler} className="add_to_car_btn">Add to cart</button></Col>
                </Row>
            </Card.Body>
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{pizza.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col md={12}>
                                <img src={pizza.image} style={{height:'250px',width:'100%'}}/>
                            </Col>
                            <Col md={12}>
                                <h5>{pizza.name}</h5>
                                <h6>Description: {pizza.description}</h6>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            </div>
        </Card>
    )
}

export default Pizza;