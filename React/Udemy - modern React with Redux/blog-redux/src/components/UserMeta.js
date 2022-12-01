import React from 'react';
import { connect } from 'react-redux';

class UserMeta extends React.Component {

    componentDidMount() {
        // console.log(this.props);
        this.props.fetchUserMeta(this.props.userId);
    }

    render() {
        // console.log(this.props.user);
        return (
            <small>{  }</small>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find(user => user.id === ownProps.userID)}
}

export default connect(mapStateToProps)(UserMeta);