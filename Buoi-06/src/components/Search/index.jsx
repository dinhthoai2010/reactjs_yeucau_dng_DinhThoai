import React from 'react';
import ArticleItem from '../ArticleItem';

const Search = () => {

    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div className="tcl-row tcl-jc-center">
            {data.map((key,val) =>
                <div key={key}  className="tcl-col-12 tcl-col-md-8"><ArticleItem isShowCategoies={true} isStyleCard isShowAvatar={false} /> </div>
            )}
        </div>
    );
};

export default Search;