import React , { useState , useEffect } from 'react';
import { Container , Row , Col , Button , Form} from 'react-bootstrap';
import { getPizzaById , updatePizza} from '../actions/pizzaAction';
import { useDispatch , useSelector } from 'react-redux';
import ApLoader from '../components/ApLoader';
import ApSuccess from '../components/ApSuccess';
import ApError from '../components/ApError';
import { useParams , useHistory} from 'react-router-dom';

const EditPizza = () =>{
    const history  = useHistory(); 
    let { id } = useParams(); 
    console.log('id ==>',id);
    const [pizzaname,setPizzaName] = useState('');
    const [image,setImage] = useState('');
    const [description,setDescription] = useState('');
    const [category,setCategory] = useState('');
    const [small,setSmall] = useState('');
    const [medium,setMedium] = useState('');
    const [large,setLarge] = useState('');

    const dispatch = useDispatch();
    const { loading , success , error , pizzas} = useSelector(state =>state.getPizzaByIdReducer);

    console.log('loadin ==>',loading);
    console.log('pizzas ==>',pizzas);

    const btnUpdate = () => {
        console.log('btnUpdate');
        const pizza = { _id:id,name:pizzaname,image,category,description,prices:{
                                small:small,
                                medium:medium,
                                large:large
                            } 
                      };
        console.log('pizza ==>',pizza);
        dispatch(updatePizza(pizza));
    }

    useEffect( ()=>{
        console.log('useEffect dispatch');
        if(pizzas) {
            setPizzaName(pizzas.name);
            setImage(pizzas.image);
            setDescription(pizzas.description);
            setCategory(pizzas.category);
            setSmall(pizzas.prices[0].small);
            setMedium(pizzas.prices[0].medium);
            setLarge(pizzas.prices[0].large);   
        }
    },[pizzas]);

    useEffect( ()=>{
        console.log('useEffect pizza');
        dispatch(getPizzaById(id));
    },[dispatch]);

    return (
        <div>

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

            <Button variant="primary" onClick={btnUpdate}>
                Update
            </Button>
        </Form>
    </div>)
}

export default EditPizza;