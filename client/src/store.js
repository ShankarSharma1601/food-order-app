import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools } from 'redux-devtools-extension'
import{getAllPizzaReducer, addPizzaReducer, getPizzaByIdReducer, updatePizzaByIdReducer } from './reducers/pizzaReducer'
import { cartReducer } from './reducers/cartReducer'
import { registerUserReducer, loginUserReducer, getAllUsersReducer } from './reducers/userReducer'
import {placeOrderReducer, getUserOrdersReducer,allUserOrdersReducer} from './reducers/orderReducer'



const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
//const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;



//creating root reducers

const rootReducer = combineReducers({
    getAllPizzaReducer : getAllPizzaReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer : loginUserReducer,
    addPizzaReducer : addPizzaReducer,
    getPizzaByIdReducer : getPizzaByIdReducer,
    updatePizzaByIdReducer : updatePizzaByIdReducer,
    getAllUsersReducer : getAllUsersReducer,
    placeOrderReducer : placeOrderReducer,
    getUserOrdersReducer : getUserOrdersReducer,
    allUserOrdersReducer : allUserOrdersReducer
})



//initial state
const initialState = {
   cartReducer :{
       cartItems : cartItems,
   },
   loginUserReducer : {
       currentUser : currentUser,
   },
};
const middleware = [thunk];

//store object
const store = createStore(
    rootReducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;