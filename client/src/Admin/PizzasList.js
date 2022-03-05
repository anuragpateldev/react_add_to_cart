import React,{useEffect} from 'react';
import { Button } from 'react-bootstrap';

import { useSelector , useDispatch } from 'react-redux';
import Pizza from '../components/Pizza';

import {Table} from 'react-bootstrap';
import { getAllPizzas , deletePizza} from '../actions/pizzaAction';

import ApLoader from '../components/ApLoader';
import { Link  } from 'react-router-dom';
 
const PizzasList = () =>{

    const dispatch = useDispatch();
    const pizzastate = useSelector(state=>state.getAllPizzaReducer);
    console.log('pizzastate ==>',pizzastate);

    const {loading,pizzas,error} = pizzastate;
    console.log('pizzas app==>',pizzas);

    const deletePizzaHandler = (pizzaId) => {
        console.log('deletePizza ==>',pizzaId);
        dispatch(deletePizza(pizzaId));
    }

    return (
        <div>
        {loading ? (<ApLoader/>) 
                : (error) ? (<h1>Error while fetching data</h1>) 
                : (
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>S/n</th>
                        <th>Pizza Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pizzas && pizzas.map( (keyValue) =>(
                                <tr key={keyValue._id}>
                                    <td>1</td>
                                    <td>{keyValue.name}</td>
                                    <td>
                                    Small : ${keyValue.prices[0].small} <br/>
                                    Medium : ${keyValue.prices[0].medium} <br/>
                                    Large : ${keyValue.prices[0].large} <br/>
                                    </td>
                                    <td>{keyValue.category}</td>
                                    <td>
                                    <Button><Link className='admin_link' to={`/admin/editpizza/${keyValue._id}`}>Edit</Link></Button>
                                    <Button onClick={()=>{deletePizzaHandler(keyValue._id)}}>Delete</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                 )}
        </div>
    )
}

export default PizzasList;