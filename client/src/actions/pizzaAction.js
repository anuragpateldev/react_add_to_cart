import axios from 'axios';

export const getAllPizzas = () => async(dispatch) =>{
    dispatch({type:'GET_PIZZAS_REQUEST'})
    try{
        const res = await axios.get('/api/pizzas/getAllPizzas');
        console.log(res); 
        dispatch({type:'GET_PIZZAS_SUCCESS',payload:res.data})
    }catch(err){
        console.log('err ==>',err);
        dispatch({type:'GET_PIZZAS_FAIL',payload:err})
    }
} 

export const addPizza = (pizza) => async(dispatch) =>{
    console.log('pizza action ==>',pizza);
    dispatch({type:'ADD_PIZZAS_REQUEST'});
    try{    
        const res = await axios.post('/api/pizzas/addpizza',{ ...pizza });
        console.log('res ==>',res);
        dispatch({type:'ADD_PIZZAS_SUCCESS',payload:res.data});
    }catch(err){
        console.log('err ==>',err);
        dispatch({type:'ADD_PIZZAS_ERROR',payload:err});
    }
}

export const getPizzaById = (id) => async(dispatch) => {

    console.log('getPizzaById ==>',id);
    dispatch({type:'GET_PIZZA_REQUEST'});
    try{
        const { data } = await axios.post('/api/pizzas/getpizzabyid', {id});
        console.log('data ==>',data);
        dispatch({type:'GET_PIZZA_SUCCESS',payload:data});
    }catch(err){
        dispatch({type:'GET_PIZZA_ERROR'});
    }
}

export const updatePizza = (pizza) => async(dispatch) =>{
    dispatch({type:'UPDATE_PIZZA_REQUEST'});
    try{
        const result = await axios.post('/api/pizzas/updatepizza', { pizza });
        dispatch({type:'UPDATE_PIZZA_SUCCESS',payload:result});
    }catch(err){
        dispatch({type:'UPDATE_PIZZA_ERROR',payload:err});
    }
}


export const deletePizza = (pizzaId) => async(dispatch) =>{
    dispatch({type:'DELETE_PIZZA_REQUEST'});
    try{
        const result = await axios.post('/api/pizzas/deletepizza',{pizzaId});
        console.log('result ==>',result);
        dispatch({type:'DELETE_PIZZA_SUCCESS',payload:pizzaId});
    }catch(err){
        dispatch({type:'DELETE_PIZZA_ERROR'});
    }
}