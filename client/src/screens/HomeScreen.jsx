import React,{useEffect} from 'react';
import './HomeScreen.css';
import {useSelector,useDispatch} from 'react-redux';
import Pizza from '../components/Pizza';
//import AllPiza from '../pizza-data';
import {Container,Row,Col} from 'react-bootstrap';
import {getAllPizzas} from '../actions/pizzaAction';

const HomeScreen = () =>{
    
    const dispatch = useDispatch();
    const pizzastate = useSelector(state=>state.getAllPizzaReducer);
    console.log('pizzastate ==>',pizzastate);

    const {loading,pizzas,error} = pizzastate;

    console.log('pizzas app==>',pizzas);

    useEffect(()=>{dispatch(getAllPizzas())},[dispatch]);
    return (
        <Container>
            { 
                loading ? (<h1>Loading...</h1>) 
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