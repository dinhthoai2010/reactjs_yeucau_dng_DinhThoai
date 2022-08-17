import './latest-news-list.css'
import ArticleItem from "../ArticleItem";
import MainTitle from '../shared/MainTitle'
import { useSelector } from 'react-redux';

function ArticleLatest() {

  const state = useSelector(state => state);
  let listPost = state.Post.listLatest
  let data = state.Post;
  console.log(data)

  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <MainTitle btnLabel="Xem thêm">Bài viết tổng hợp</MainTitle>
        <div className="latest-news__list spacing">
          {listPost && listPost.map(post => <div key={post.id} className="latest-news__card"><ArticleItem post={post} /></div>)}
        </div>
      </div>
    </div>
  )
}

export default ArticleLatest