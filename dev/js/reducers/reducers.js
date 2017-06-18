import { combineReducers } from "redux";
import UserReducer from "./users.reducer";
import ActiveUserReducer from "./active-user.reducer";

// Combines all reducers into a single reducer.
const Reducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer
});

export default Reducers;
