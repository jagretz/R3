import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducers from "./reducers/reducers";
import App from "./components/app.js";

// Create a redux store which contains all of the reducers.
const store = createStore(Reducers);

ReactDOM.render(
    // Make our store available to every single component.
    // Pass the `store` to the `store` `props`
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
