import React from "react";
import UserList from "../containers/user-list";
import UserDetail from "../containers/user-detail";
// During transpilation, webpack will transpile the scss to css.
// Importing the styles here makes it available anywhere we use the `App` component.
require("../../scss/style.scss");

// The app! Essentially just a container for the spa.
export default function App() {
    return (
        <div>
            <h2>Username List:</h2>
            <UserList />
            <hr/>
            <h2>User Details:</h2>
            <UserDetail />
        </div>
    );
};
