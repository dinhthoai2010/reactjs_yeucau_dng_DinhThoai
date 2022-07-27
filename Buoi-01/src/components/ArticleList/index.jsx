import ArticleItem from 'components/ArticleItem';
import ArticleLatest from 'components/ArticleLatest';
import React from 'react';

const ArticleList = ({ListPost,type}) => {
    let listItems = '';
    if(type=="1"){
        listItems = ListPost.map((post,key) =>
        <ArticleLatest key={key} post={post} />
    );
    } else{
        listItems = ListPost.map((post,key) =>
            <ArticleItem key={key} post={post} />
        );
    }
    return (
        <>
            {listItems}
        </>
    );
};

export default ArticleList;