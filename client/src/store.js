import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { getAllPizzaReducer , addPizzaReducer , getPizzaByIdReducer , updatePizzaReducer , deletePizzaReducer } from './reducers/pizzaReducers';
import {cartReducer} from './reducers/cartReducers';
import {registerUserReducer , loginUserReducer , getAllUserReducer , deleteUserReducers } from './reducers/userReducers';
import { placeOrderReducer , getUserOrdersReducer , getAllOrderReducers , deliveredOrderReducers } from './reducers/orderReducers';

const cartItem = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
const initialState = {
    cartReducer:{
        cartItems:cartItem
    },
    loginUserReducer:{
        currentUser:currentUser
    },
};

const rootReducers = combineReducers({
    getAllUserReducer:getAllUserReducer,
    getAllPizzaReducer:getAllPizzaReducer,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer,
    getUserOrdersReducer:getUserOrdersReducer,
    addPizzaReducer:addPizzaReducer,
    getPizzaByIdReducer:getPizzaByIdReducer,
    updatePizzaReducer:updatePizzaReducer,
    deletePizzaReducer:deletePizzaReducer,
    getAllOrderReducers:getAllOrderReducers,
    deliveredOrderReducers:deliveredOrderReducers,
    deleteUserReducers:deleteUserReducers,
});

const middleware = [thunk];

const store = createStore(rootReducers,initialState,composeWithDevTools(applyMiddleware(...middleware)));
export default store;