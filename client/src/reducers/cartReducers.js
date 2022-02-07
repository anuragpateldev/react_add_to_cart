export const cartReducer = (state = {cartItems:[]},action)=>{

    switch(action.type){
        case 'ADD_TO_CART':

            const alreadyExits = state.cartItems.find( x=> x._id === action.payload._id );
            console.log('state ==>',state);
            console.log('action.payload ==>',action.payload);
            console.log('alreadyExits ==>',alreadyExits);

           if(alreadyExits){
                return { 
                    ...state,
                    cartItems:state.cartItems.map(item =>item._id === action.payload.id ? action.payload : item)
                }
            }else{
                return { 
                    ...state,
                    cartItems:[...state.cartItems,action.payload]
                }
            }
            
        default: return state;
    }
}