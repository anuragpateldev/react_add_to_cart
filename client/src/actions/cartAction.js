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

    console.log('before dispatch ==>',cartItem);
    
    dispatch({type:'ADD_TO_CART',payload:cartItem});
    console.log('after dispatch ==>',getState().cartReducer.cartItems);
    localStorage.setItem('cartItems',JSON.stringify(getState().cartReducer.cartItems))
}