import React from 'react';

const ArticleImage = ({className,href, label, src}) => {
    return (
        <div className={className}>
            <a href={href} aria-label={label}>
                <img src={src} alt={src} />
            </a>
        </div>
    );
};

export default ArticleImage;