import ArticleItem from '../ArticleItem'
import './popular-news-list.css'
import { useSelector } from 'react-redux';
import { getPost } from '../../helpers';
function ArticlePopular() {

  const state = useSelector(state => state);
  let listPost = state.Post.listPopular
  let posts2 = getPost(listPost, 1, 2)
  let posts1 = getPost(listPost, 2,1)
  if (!listPost) return null;

  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
          <h2>Bài viết 1111</h2>
          <a href="/" className="btn btn-default">View More</a>
        </div>
        <div className="popular-news__list spacing">
          <div className="popular-news__list--left">
            <div className="popular-news__list--row">
              {posts1 && posts1.map(post => <div key={post.id} className="popular-news__list--card"><ArticleItem isStyleCard isShowCategoies isShowDesc post={post} /></div>)}
            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              {posts2 && posts2.map(post => <div key={post.id} className="popular-news__list--card"><ArticleItem isStyleCard isStyleRow isShowDesc post={post} /></div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlePopular