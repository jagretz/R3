import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class UserDetail extends Component {
    render() {
        const user = this.props.user;
        if (!user) {
            return (<p>Please select a user.</p>);
        }

        return (
            <div>
                <img src={user.thumbnail} />
                <h2>Name: {user.first} {user.last}</h2>
                <h3>Age: {user.age}</h3>
                <h3>Description: {user.description}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);
