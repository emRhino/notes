import React from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';

const PostList = () => {


    return (
        <div>Post List</div>
    )
}

export default connect(null, { fetchPosts })(PostList);