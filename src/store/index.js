import {combineReducers, createStore } from 'redux';
import {houseReducer} from "../store/house/house-reducer";


const rootReducer = combineReducers({
  houseReducer
});


const store = createStore(
  rootReducer
);



export default store;
