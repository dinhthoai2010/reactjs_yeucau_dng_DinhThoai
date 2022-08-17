import React from 'react';
import Search from '../../components/Search';
import Button from '../../components/shared/Button';
import MainTitle from '../../components/shared/MainTitle';

const SearchPage = () => {
    const queyString = new URLSearchParams(window.location.search)
    let title = `4 Results found for "` + queyString
    return (
        <div className="articles-list section">
            <div className="tcl-container">
                <MainTitle type="search">{title}</MainTitle>
                <Search />
                <div className="text-center">
                    <Button type="primary" size="large" loading={true}>Tải thêm</Button>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;