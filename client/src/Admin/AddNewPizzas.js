import React , { useState , useEffect } from 'react';
import { Container , Row , Col , Button , Form} from 'react-bootstrap';
import { addPizza } from '../actions/pizzaAction';
import { useDispatch , useSelector } from 'react-redux';
import ApLoader from '../components/ApLoader';
import ApSuccess from '../components/ApSuccess';
import ApError from '../components/ApError';

const AddNewPizzas = () =>{
    const [pizzaname,setPizzaName] = useState('');
    const [image,setImage] = useState('');
    const [description,setDescription] = useState('');
    const [category,setCategory] = useState('');
    const [small,setSmall] = useState('');
    const [medium,setMedium] = useState('');
    const [large,setLarge] = useState('');

    const dispatch = useDispatch();
    const { loading , success , error } = useSelector(state =>state.addPizzaReducer);

    const btnSubmit = () => {
        console.log('btnSubmit');
        const name = pizzaname;
        const pizza = { name,image,category,description,prices:{
                                small:small,
                                medium:medium,
                                large:large
                            } 
                      };
        console.log('pizza ==>',pizza);
        dispatch(addPizza(pizza));
    }

    useEffect( ()=>{
        console.log('useEffect');
    },[dispatch]);

    return (<div>
        {loading && (<ApLoader/>)}
        {success && (<ApSuccess/>)}
        {error && (<ApError/>)}
        
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" 
                placeholder="Enter name" 
                value={pizzaname}
                onChange={(e)=>setPizzaName(e.target.value)}
                />
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="sizeSmall">
                        <Form.Label>Small Price</Form.Label>
                        <Form.Control type="text" 
                        placeholder="Enter Small price" 
                        value={small}
                        onChange={(e)=>setSmall(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="sizeSmall">
                        <Form.Label>Medium Price</Form.Label>
                        <Form.Control type="text" 
                        placeholder="Enter medium price"
                        value={medium}
                        onChange={(e)=>setMedium(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="sizeSmall">
                        <Form.Label>Large Price</Form.Label>
                        <Form.Control type="text" 
                        placeholder="Enter large price" 
                        value={large}
                        onChange={(e)=>setLarge(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" 
                placeholder="Add image URL"
                value={image}
                onChange={(e)=>setImage(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" 
                placeholder="Enter Description" 
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" 
                placeholder="Enter Category" 
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" onClick={btnSubmit}>
                Submit
            </Button>
        </Form>
    </div>)
}

export default AddNewPizzas;