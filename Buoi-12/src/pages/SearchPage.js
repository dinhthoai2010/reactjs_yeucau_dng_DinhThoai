import Button from "../components/shared/Button";
import ArticleItem from "../components/ArticleItem";
import MainTitle from "../components/shared/MainTitle";
import { getQueryStr } from "../helpers";
import { useEffect, useState } from "react";
import { actFetchArticlesAsync } from "../store/post/actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function SearchPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryStr = getQueryStr('q', location);
  const { list: posts, currentPage, totalPages, total } = useSelector(state => state.Post.articlePaging);
  const [loading, setLoading] = useState(false);
  const hasMorePost = currentPage < totalPages;

  useEffect(() => {
    dispatch(actFetchArticlesAsync({ search: queryStr }));
  }, [dispatch, queryStr]);

  function handleLoadMore() {
    if (loading) return;

    setLoading(true);
    const params = { currentPage: currentPage + 1, search: queryStr };
    dispatch(actFetchArticlesAsync(params)).then(() => {
      setLoading(false);
    })
  }

  return (
    <div className="articles-list section">
      <div className="tcl-container">

        <MainTitle type="search">{total} kết quả tìm kiếm với từ khóa "{queryStr}"</MainTitle>

        <div className="tcl-row tcl-jc-center">
          {
            posts.map(postItem => {
              return (
                <div className="tcl-col-12 tcl-col-md-8" key={postItem.id}>
                  <ArticleItem
                    isStyleCard
                    isShowCategoies
                    isShowAvatar={false}
                    isShowDesc={false}
                    post={postItem}
                  />
                </div>
              )
            })
          }
        </div>

        {
          hasMorePost && (
            <div className="text-center">
              <Button type="primary" size="large" loading={loading} onClick={handleLoadMore}>Tải thêm</Button>
            </div>
          )
        }
      </div>
    </div>

  )
}

export default SearchPage