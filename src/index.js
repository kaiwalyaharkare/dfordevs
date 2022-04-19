import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {reducer} from "./reducers/index.js";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from'redux-thunk'

const middleware = applyMiddleware(thunk)
const enhancers = compose(middleware,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(reducer,undefined,enhancers,)

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
