import ArticleItem from "../ArticleItem";
import Button from "../shared/Button";
import MainTitle from "../shared/MainTitle";

import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { listGeneral } from "../../store/post/action";


function ArticleGeneral() {
  const [numLoad, setNumLoad] = useState(2);

  const state = useSelector(state => state);                                            
  let listPost = state.Post.listGeneral
  const disPatch = useDispatch();

  function handleLoadMore() {
     setNumLoad(numLoad+1)
     disPatch(listGeneral({ per_page: 4, page:numLoad }))
  }


  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem them">Bài viết tổng hợp</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          {listPost && listPost.map(post => <div key={post.id} className="tcl-col-12 tcl-col-md-6"> <ArticleItem isStyleCard isShowAvatar={false} post={post} /></div>)}
        </div>
        {/* End Row News List */}
        <div className="text-center">
          <Button onClick={handleLoadMore} type="primary" size="large" >Tải thêm</Button> 
        </div>
      </div>
    </div>
  )
}

export default ArticleGeneral