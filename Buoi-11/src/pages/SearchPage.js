import Button from "../components/shared/Button";
import { useDispatch } from "react-redux"
import ArticleItem from "../components/ArticleItem";
import MainTitle from "../components/shared/MainTitle";
import { getQueryStr } from "../helpers";
import { useEffect, useState } from "react";
import { actFetchListPostAsync } from "../store/post/actions";

function SearchPage() {
  const queryStr = getQueryStr('q')

  const dispatch = useDispatch();
  const [post, setPost] = useState({});
  const [page, setPage] = useState(1);

  const params={
    search:queryStr,
    per_page : 3,
    page : page
    };

  useEffect(() => {
    dispatch(actFetchListPostAsync(params)).then(post => {
      setPost(post)
      setPage(page+1)
    })
  },[])
  function handlerLoadMore () {
    dispatch(actFetchListPostAsync(params)).then(item => {
      console.log(...post)
      console.log(...item)
      setPost([...post,...item])
      setPage(page+1)
    })
  }
  return (
    <div className="articles-list section">
      <div className="tcl-container">
  
        <MainTitle type="search">10 kết quả tìm kiếm với từ khóa "{ queryStr }"</MainTitle>
        
        <div className="tcl-row tcl-jc-center">
          {post.length > 0 && post.map((item,key) => <div key={key} className="tcl-col-12 tcl-col-md-8">
            <ArticleItem 
              isStyleCard 
              isShowCategoies 
              isShowAvatar={false} 
              isShowDesc={false} 
              post={item}
            />
          </div>) }
        </div>

        <div className="text-center">
          <Button type="primary" onClick={handlerLoadMore} size="large">Tải thêm</Button>
        </div>
      </div>
    </div>

  )
}

export default SearchPage