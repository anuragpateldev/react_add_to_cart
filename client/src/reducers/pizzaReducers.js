export const getAllPizzaReducer = (state = {pizzas:[]},action) =>{
    switch(action.type){
        case 'GET_PIZZAS_REQUEST':
            return {
                ...state,
                loading:true,
            }
        case 'GET_PIZZAS_SUCCESS':
            return {
                pizzas:action.payload,
                loading:false,
            }
        case 'GET_PIZZAS_FAIL':
            return {
                error:action.payload,
                loading:false,
            }
        default: return state
    }
}

export const addPizzaReducer = (state = { },action) =>{
    switch(action.type){
        case 'ADD_PIZZAS_REQUEST':
            return {
                ...state,
                loading:true,
            }
        case 'ADD_PIZZAS_SUCCESS':
            return {
                pizzas:action.payload,
                success:true,
                loading:false,
            }
        case 'ADD_PIZZAS_FAIL':
            return {
                error:action.payload,
                loading:false,
            }
        default: return state
    }
}

export const getPizzaByIdReducer = (state = { },action) =>{
    switch(action.type){
        case 'GET_PIZZA_REQUEST':
            return {
                ...state,
                loading:true,
            }
        case 'GET_PIZZA_SUCCESS':
            return {
                pizzas:action.payload,
                success:true,
                loading:false,
            }
        case 'GET_PIZZA_FAIL':
            return {
                error:action.payload,
                loading:false,
            }
        default: return state
    }
}

export const updatePizzaReducer = (state={},action) => {
    console.log('updatePizzaReducer state==>',state);
    console.log('updatePizzaReducer action==>',action);

    switch(action.type){
        case 'UPDATE_PIZZA_REQUEST' : 
            return {
                loading:true,
            }
        case 'UPDATE_PIZZA_SUCCESS' : {
            return {
                loading:false,
                success :true,
            }
        }
        case 'UPDATE_PIZZA_ERROR' : {
            return {
                loading:false,
                error:action.payload
            }
        }
        default:
            return state;
    }
}

export const deletePizzaReducer = (state = {},action) =>{
    console.log('state ==>',state);
    console.log('action ==>',action);
    switch(action.type){
        case 'DELETE_PIZZA_REQUEST':{
            return {
                loading:true
            }
        }
        case 'DELETE_PIZZA_SUCCESS':{
            return {
                loading:false,
                success:true,
            }
        }
        case 'DELETE_PIZZA_ERROR':{
            return {
                loading:false
            }
        }
        default: {
            return state;
        }
    }
}