export const placeOrderReducer = (state = {},action) =>{
    switch(action.type){
        case 'PLACE_ORDER_REQUEST' : 
            return {
                loading:true
            }
        case 'PLACE_ORDER_SUCCESS' : 
            return {
                loading:false,
            }
        case 'PLACE_ORDER_FAIL':
            return {
                loading:false,
                error:action.payload
            }
        default: return state;
    }
}
  
export const getUserOrdersReducer = (state={ orders:[] },action) =>{
    console.log('aaa action ',action);
    switch(action.type){
        case 'USER_ORDER_REQUEST' : 
            return {
                loading:true
            }
        case 'USER_ORDER_SUCCESS' : 
            return {
                loading:false,
                success:true,
                orders:action.payload
            }
        case 'USER_ORDER_FAIL':
            return {
                loading:false,
                error:action.payload
            }
        default: return state;
    }
}

export const getAllOrderReducers = (state={orders:[]},action) =>{
    console.log('state :',state);
    console.log('action :',action);
    switch(action.type){
        case 'GET_ALL_ORDER_REQUEST':
            return {
                loading:true
            }
        case 'GET_ALL_ORDER_SUCCESS':
            return {
                loading:false,
                success:true,
                orders:action.payload
            }
        case 'GET_ALL_ORDER_FAIL':
            return {
                loading:false,
                error:action.payload
            }
        default:  return state;
    }
}

export const deliveredOrderReducers = (state = {} , action) => {
    console.log('deliveredOrderReducers ==>',state);
    console.log('deliveredOrderReducers ==>',action);

    switch(action.type){
        case 'DELIVERED_ORDER_REQUEST' : 
            return {
                loading:true
            }
        case 'DELIVERED_ORDER_SUCCESS':{
            return {
                loading:false,
                success:true,
            }
        }
        case 'DELIVERED_ORDER_ERROR':{
            return {
                loading:false,
                error:action.payload
            }
        }
        default: return state;
    }
}