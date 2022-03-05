import React,{useEffect} from 'react';
import './HomeScreen.css';
import { useSelector , useDispatch } from 'react-redux';
import Pizza from '../components/Pizza';

import {Container,Row,Col,Button} from 'react-bootstrap';
import {getAllPizzas} from '../actions/pizzaAction';

import ApLoader from '../components/ApLoader';
import { useHistory } from 'react-router-dom';

const HomeScreen = () =>{
    const history = useHistory();
    const dispatch = useDispatch();
    
    const pizzastate = useSelector(state=>state.getAllPizzaReducer);
    console.log('pizzastate ==>',pizzastate);

    const {loading,pizzas,error} = pizzastate;

    console.log('pizzas app==>',pizzas);

    useEffect(()=>{dispatch(getAllPizzas())},[dispatch]);

    return (
        <Container>
            <Button onClick={(e)=>history.push('/admin')}>Admin</Button>
            { 
                loading ? (<ApLoader/>) 
                : (error) ? (<h1>Error while fetching data</h1>) 
                : (
                    <Row>
                    {
                        pizzas.map((keyValue,index) =>(
                            <Col xs={4} key={`index_${index}`}><Pizza  pizza={keyValue}/></Col>
                        ))
                    }
                    </Row>
                ) 
            }
        </Container>
    )
}
export default HomeScreen;