import './latest-news-list.css';

import MainTitle from '../shared/MainTitle';
import ArticleItem from '../ArticleItem';

function ArticleLatest({post}) {

  
  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <MainTitle btnLabel="View More">ArticleLatest</MainTitle>
        <div className="latest-news__list spacing">
          <div className="latest-news__card">
            <ArticleItem post={post}  author={true}/>
          </div>
          <div className="latest-news__card">
            <ArticleItem post={post}  author={true}/>
          </div>
          <div className="latest-news__card">
            <ArticleItem post={post}  author={true}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleLatest;