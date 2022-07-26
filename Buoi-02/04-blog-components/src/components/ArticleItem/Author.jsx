import React from 'react';
import ArticleAuthor from './ArticleAuthor';
import ArticleImage from './ArticleImage';

const Author = ({img, author}) => {
    return (
        <div className="article-item__info">
            {img && <ArticleImage className="article-item__author-image" aria-label={author.name} href={author.href} src ={author.img}/> }
            <ArticleAuthor name={author.name} date={author.date} time={author.time}/>
        </div>
    );
};

export default Author;