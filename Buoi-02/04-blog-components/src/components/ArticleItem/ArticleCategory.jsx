import React from 'react';
import Button from '../shared/Button';

const ArticleCategory = ({cats}) => {
    let htmlD = cats.map((cat, key)=> {
        return  <li key={key}><Button type="category" as="a" href={cat.href}>{cat.name}</Button></li>
    })
    return (
        <ul className="article-item__categories">
           {htmlD}
        </ul>
    );
};

export default ArticleCategory;