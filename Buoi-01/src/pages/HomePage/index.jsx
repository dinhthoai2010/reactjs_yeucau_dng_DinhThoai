import ArticleItem from 'components/ArticleItem';
import ArticlePopular from 'components/ArticlePopular';
import Button from 'components/shared/Button';
import Title from 'components/shared/Title';
import ListPost from 'Mock/ListPost';
import ListPost6 from 'Mock/ListPost6';

import React from 'react';
import ArticleList from '../../components/ArticleList';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import './HomePage.css'

const HomePage = () => {

  
    return (
        <div className='wrapper-content'>
            <Header />

            <div className="latest-news section">
			    <div className="tcl-container">
                    <Title title='Latest Articles' />
                    <div className="latest-news__list spacing">
                        <ArticleList ListPost={ListPost} type="1" />
                    </div>
                </div>
            </div>

            <div className="popular-news section bg-white-blue">
                <div className="tcl-container">
                    <Title title='Popular Articles' >
                        <Button name="View More" />
                    </Title>

				<div className="popular-news__list spacing">
					<div className="popular-news__list--left">
						<div className="popular-news__list--row">
							<div className="popular-news__list--card">
                                <ArticlePopular post={ListPost[0]}/>
							</div>

							<div className="popular-news__list--card">
                                <ArticlePopular post={ListPost[1]}/>
							</div>
						</div>

					</div>
					<div className="popular-news__list--right">
						<div className="popular-news__list--row">
							<div className="popular-news__list--card">
                                <ArticlePopular post={ListPost[2]} style="style-row"/>
							</div>
						</div>
					</div>
				</div>

			</div>
		    </div>
            <div className="articles-list section">
			<div className="tcl-container">
                <Title title='News List' >
                    <Button name="View More" />
                </Title>
				
				<div className="tcl-row">
                    <ArticleList ListPost={ListPost6} type="2" />
				</div>
				<div className="text-center">
					<button className="btn btn-primary btn-size-large">
						Load more
					</button>
				</div>

			</div>
		</div>

		    <div className="spacing"></div>

            {/* <ArticleLatest post={data} />
            <ArticleItem post={data}/>
            <ArticlePopular post={data}/> */}
            <Footer />
        </div>
    );
};

export default HomePage;