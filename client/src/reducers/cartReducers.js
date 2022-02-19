export const cartReducer = (state = {cartItems:[]},action)=>{

    switch(action.type){
        case 'ADD_TO_CART':
            const alreadyExits = state.cartItems.find( x=> x._id === action.payload._id );
           if(alreadyExits){
               if(action.payload.quantity === 0){
                   return {
                       ...state,
                       cartItems:state.cartItems.filter(x=>x._id !== action.payload._id)
                   }
               }
                return { 
                    ...state,
                    cartItems:state.cartItems.map(item =>item._id === action.payload._id ? action.payload : item)
                }
            }else{
                console.log('else condition');
                return { 
                    ...state,
                    cartItems:[...state.cartItems,action.payload]
                }
            }
            
        default: return state;
    }
}