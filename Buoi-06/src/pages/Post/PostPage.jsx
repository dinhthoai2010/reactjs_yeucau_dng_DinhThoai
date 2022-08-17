import React from 'react';
import { useParams } from 'react-router-dom';
import PostDetail from '../../components/PostDetail';

const PostPage = () => {
    let { slug } = useParams();

    return (
        <div>
            <PostDetail url={slug} />
        </div>
    );
};

export default PostPage;