import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {getAllPizzaReducer} from './reducers/pizzaReducers';
import {cartReducer} from './reducers/cartReducers';
import {registerUserReducer , loginUserReducer} from './reducers/userReducers';

const cartItem = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
const initialState = {
    cartReducer:{
        cartItems:cartItem
    }
};

const rootReducers = combineReducers({
    getAllPizzaReducer:getAllPizzaReducer,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
});

const middleware = [thunk];

const store = createStore(rootReducers,initialState,composeWithDevTools(applyMiddleware(...middleware)));
export default store;