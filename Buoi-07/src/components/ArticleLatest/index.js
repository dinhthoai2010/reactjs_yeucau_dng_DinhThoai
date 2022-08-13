import './latest-news-list.css'
import ArticleItem from "../ArticleItem";
import MainTitle from '../shared/MainTitle'
import { useSelector } from 'react-redux';
import { getPost } from '../../helpers';

function ArticleLatest() {

  const state = useSelector(state => state);
  let listPost = state.Post.listPost
  let posts = getPost(listPost, 3)
  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <MainTitle btnLabel="Xem thêm">Bài viết tổng hợp</MainTitle>
        <div className="latest-news__list spacing">
          {posts && posts.map(post => <div key={post.id} className="latest-news__card"><ArticleItem post={post} /></div>)}
        </div>
      </div>
    </div>
  )
}

export default ArticleLatest