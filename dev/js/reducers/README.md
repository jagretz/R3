# Reducers

Reducers take in actions and update part of application state.
- We combine all reducers into a single object before updated data is dispatched (sent) to store
- Your entire applications state (store) is just whatever gets returned from all your reducers

```
const allReducers = combineReducers({
    users
});
```

A reducer a bit of data that we want to save in our app.
Each reducer is combined into one big object `Reducers` that holds all of our reducers.
We take that big object of reducers and pass it to redux to create our `const store = createStore(Reducers)`
`store` is just a big object of data.
We pass this `store` object to our main app component, typically `<App />` through the redux Provider `<Provider store={store}> <App /> </Provider>`. This gives every component access to this store.

You may also see a `mapStateToProps()` function using `connect()` to "connect" data
to a component. The entire purpose of this function is becuase most components only need a subset
of data from the store. We only want each component to worry about (have access to) data that is necessary. `connect` and `mapStateToProps` allows us to connect our component to only a subset of data from the `store`.

Anytime an action occurs, that action will be sent to ALL reducers!

