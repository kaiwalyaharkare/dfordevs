import postReducer from "./postReducers";
import {combineReducers} from "redux"
import  AuthReducer from "./AuthReducer";

export const reducer = combineReducers({postReducer,AuthReducer})

