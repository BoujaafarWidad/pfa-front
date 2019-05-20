import React from "react";
import ReactDOM from "react-dom";
import App from "./components";
import "./assets/css/index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./redux/reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
