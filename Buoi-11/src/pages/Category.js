import Button from "../components/shared/Button";
import { useDispatch } from "react-redux"
import ArticleItem from "../components/ArticleItem";
import MainTitle from "../components/shared/MainTitle";
// import { getQueryStr } from "../helpers";
import { useEffect, useState } from "react";
import { actFetchListPostAsync } from "../store/post/actions";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

function Category() {
  const categorys = useParams().slug
  const dispatch = useDispatch();
  const [post, setPost] = useState({});
  const [page, setPage] = useState(1);

  const listTags = useSelector (state => state.Category.hashCategoryById);
console.log(listTags)
  // 
  // if(listTags && Object.keys(listTags).length === 0) {
    console.log(Object.keys(listTags).length === 0)
    console.log(Object.keys(listTags))
console.log(listTags)

    console.log(Object.getPrototypeOf(listTags) === Object.prototype)
    const idCat = (Object.keys(listTags).length > 0) ?listTags.map(val => val.slug===categorys):'1' ;
  // }
  console.log(idCat);
  const params={
    categorys:categorys,
    per_page : 3,
    page : page
    };

  useEffect(() => {
    dispatch(actFetchListPostAsync(params)).then(post => {
      console.log(post)
      setPost(post)
      setPage(page+1)
    })
  },[])
  function handlerLoadMore () {
    dispatch(actFetchListPostAsync(params)).then(item => {
      setPost([...post,...item])
      setPage(page+1)
    })
  }
  return (
    <div className="articles-list section">
      <div className="tcl-container">
  
        <MainTitle type="search">Danh muc "{ categorys }"</MainTitle>
        
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

export default Category