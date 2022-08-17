import React from 'react';
import PostDetailHead from './PostDetailHead';

const PostDetail = ({ url }) => {
    return (
        <main className="post-detail">
            <div className="spacing" />
            <PostDetailHead url={url} />
        </main>
    );
};

export default PostDetail;