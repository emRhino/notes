import React from'react';
import { connect } from 'react-redux';
import { fetchUserMeta } from '../actions';

class UserMeta extends React.Component {

    componentDidMount() {
        // console.log(this.props.userId);
        this.props.fetchUserMeta(this.props.userId);
    }

    render() {
        // console.log(this.props.user);
        return (
            <small>{ this.props.userName }</small>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {userName: state.user}
}

export default connect(mapStateToProps, { fetchUserMeta })(UserMeta);