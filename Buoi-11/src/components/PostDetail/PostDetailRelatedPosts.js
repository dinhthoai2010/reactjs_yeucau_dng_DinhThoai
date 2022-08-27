import { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports"
import { actFetchPostByCategoryIdAsync } from "../../store/post/actions";
import ArticleRelated from "../ArticleItem/ArticleRelated"


function PostDetailRelatedPosts({ category }) {
  const dispatch = useDispatch();
  const [listPost, setListPost] = useState([]);
  const categories = category.join(",");
  useEffect(() => {
    dispatch(actFetchPostByCategoryIdAsync(categories)).then((posts) =>
      setListPost(posts)
    );
  }, [])

  if (listPost.length <= 0) return null;
  return (
    <div className="related-post">
      <h2 className="related-post__head">Related Posts</h2>
      {listPost.map((item, key) => <ArticleRelated post={item} key={key} />)}
    </div>
  )
}

export default PostDetailRelatedPosts