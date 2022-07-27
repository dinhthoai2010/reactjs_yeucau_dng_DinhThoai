import React from 'react';
import './ArticleItem.css'

const ArticleItem = ({post}) => {
    return (
        <div className="tcl-col-12 tcl-col-md-6">
            <article className="article-item style-card">
                <div className="article-item__thumbnail">
                    <a href="#">
                        <img src={post.image_thumb} alt={post.image_thumb} />
                    </a>
                </div>
                <div className="article-item__content">
                    <h2 className="article-item__title">
                        <a href="/post-detail.html">{post.name}</a>
                    </h2>
                    <div className="article-item__info">
                        <div className="article-item__info-right">
                            <div className="article-item__author-name">
                                <a href="#"><strong>{post.author}</strong></a>
                            </div>
                            <div className="article-item__datetime">
                                <div className="date">{post.created}</div>
                                <div className="time">
                                    1 min</div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default ArticleItem;