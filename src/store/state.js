import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {StatusReducers} from './Loader-reducer'
import {DonorReducer} from "./Donor-reducer";


const reducers = combineReducers({
    features: StatusReducers,
    donors: DonorReducer
})


export const store = createStore(reducers, applyMiddleware(thunk));