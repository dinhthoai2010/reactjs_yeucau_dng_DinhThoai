import React from 'react';
import searchIcon from 'assets/image/searchIcon.svg'
import './Search.css'

const Search = () => {
    return (
        <div >
            <form action="/search.html" method="get" >
                <div className="header-search">
                    <img src={searchIcon} />
                    <input className="header-search__input" type="text" placeholder="Search articles here ..."
                            name="query" />
                </div>
            </form>
        </div>
    );
};



export default Search;