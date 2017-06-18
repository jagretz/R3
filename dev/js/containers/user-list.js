import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectUser } from "../actions/user.actions";

class UserList extends Component {
    createListItems() {
        return this.props.users.map(user => {
            return (
                <li key={user.id} 
                    /* Use onClick to dispatch an action creator */
                    onClick={ () => this.props.selectUser(user) }>
                    {user.first} {user.last}
                </li>
            );
        });
    }
    render() {
        return (
            <ul>
                { this.createListItems() }
            </ul>
        );
    }
}

/**
 * #mapStateToProps
 * Takes a piece of your store (data) and passes it into your component
 * as a property (props), thats it.
 * 
 * In this example, we take the state, and return the users. When UserList instantiates, the props
 * argument in the constructor will have the users state as a prop; `props.users`
 */
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

/**
 * #matchDispatchToProps
 * 
 * Instead of declaring actions directly to our component we use the `connect()` function so that it is
 * managed by redux.
 * 
 */
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectUser
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
