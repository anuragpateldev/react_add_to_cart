export const addToCart = (pizza,quantity,varient) => (dispatch,getState) =>{

    console.log('action addto cart',pizza);
    console.log('action addto quantity',quantity);
    console.log('action addto varient',varient);

    var cartItem = {
        name:pizza.name,
        _id:pizza._id,
        image:pizza.image,
        varient:varient,
        quantity:quantity,
        prices:pizza.prices,
        price:pizza.prices[0][varient] * quantity,
    }

    if(cartItem.quantity > 10){
        alert('You can not select more than 10 items');
        return false;
    }

    console.log('before dispatch ==>',cartItem);
    
    dispatch({type:'ADD_TO_CART',payload:cartItem});
    console.log('after dispatch ==>',getState().cartReducer.cartItems);
    localStorage.setItem('cartItems',JSON.stringify(getState().cartReducer.cartItems))
}

export const deleteFromCart = () => (dispatch) =>{
    dispatch({type:'DELETE_FROM_CART'});
    localStorage.removeItem('cartItems');
}

export const removeCartItem = (pizza) => (dispatch,getState) =>{
    console.log('ap removeCartItem ==>',getState().cartReducer.cartItems);
    dispatch({type:'REMOVE_CART_ITEM',payload:pizza});
    console.log('new ap removeCartItem ==>',getState().cartReducer.cartItems);
    localStorage.setItem('cartItems',JSON.stringify(getState().cartReducer.cartItems));
}