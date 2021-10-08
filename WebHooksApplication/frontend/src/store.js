import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import accountReducer from "./reducers/accountReducer";

var middleware = [thunk];

const rootReducer = combineReducers({
    account: accountReducer
});

var store = createStore(rootReducer, 
    {}, 
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;