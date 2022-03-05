import axios from "axios";

export const placeOrder = (token,subTotal) => async(dispatch,getState) =>{
    dispatch({type:'PLACE_ORDER_REQUEST'});

    const currentUser =  getState().loginUserReducer.currentUser;
    const cartItems =  getState().cartReducer.cartItems;
    console.log('currentUser ==>',currentUser);
    console.log('cartItems ==>',cartItems);
 
    try{
        const res = await axios.post('/api/orders/placeorder',{ token , subTotal , currentUser , cartItems });
        dispatch({type:'PLACE_ORDER_SUCCESS'});
        console.log('res ==>',res);
    }catch(err){
        console.log('err',err);
        dispatch({type:'PLACE_ORDER_FAIL'});
    }
}

export const getUserOrders = () => async (dispatch,getState) =>{
    const currentUser = getState().loginUserReducer.currentUser;
    console.log('currentUser ==>',currentUser);

    dispatch({ type : 'USER_ORDER_REQUEST'});
    try{
        const response = await axios.post('/api/orders/getuserorder',{ userid : currentUser._id});
        console.log('response ==>',response);
        console.log('response ==>',response.data);
        dispatch({type:'USER_ORDER_SUCCESS',payload:response.data});
    }catch(err){
        console.log('err ==>',err);
        dispatch({type:'USER_ORDER_FAIL',payload:err});
    }
}
//getAllOrderReducers
export const getAllOrders = () =>async(dispatch) =>{
    dispatch({type:'GET_ALL_ORDER_REQUEST'});
    try{
        const { data }  =  await axios.get('/api/orders/getorder');
        dispatch({type:'GET_ALL_ORDER_SUCCESS',payload:data});
    }catch(err){

        dispatch({type:'GET_ALL_ORDER_FAIL'});
    }
}

export const deliveredOrder = (orderid) => async (dispatch) => {

    console.log('deliveredOrder ==>',orderid);
    dispatch({type:'DELIVERED_ORDER_REQUEST'});
    try{
        const result = await axios.post('/api/orders/deliverorder',{ orderid });
        dispatch({type:'DELIVERED_ORDER_SUCCESS',payload:result});
    }catch(err){
        dispatch({type:'DELIVERED_ORDER_ERROR',payload:err});
    }
    
}

