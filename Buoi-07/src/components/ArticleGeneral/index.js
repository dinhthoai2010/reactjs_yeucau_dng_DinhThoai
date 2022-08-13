import ArticleItem from "../ArticleItem";
import Button from "../shared/Button";
import MainTitle from "../shared/MainTitle";

import { useSelector } from 'react-redux';
import { getPost } from "../../helpers";


function ArticleGeneral() {

  const state = useSelector(state => state);
  let listPost = state.Post.listPost

  let posts2 = getPost(listPost, 4);

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle btnLabel="Xem them">Bài viết tổng hợp</MainTitle>
        <div className="tcl-row">
          {posts2 && posts2.map(post => <div key={post.id} className="tcl-col-12 tcl-col-md-6"> <ArticleItem isStyleCard isShowAvatar={false} post={post} /></div>)}
        </div>
        <div className="text-center">
          <Button type="primary" size="large" loading={true}>Tải thêm</Button>
        </div>
      </div>
    </div>
  )
}

export default ArticleGeneral