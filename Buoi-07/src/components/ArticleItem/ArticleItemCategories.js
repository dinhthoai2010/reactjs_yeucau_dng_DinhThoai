import { useSelector } from "react-redux";

export default function ArticleItemCategories({categoriesId}) {
  const categories = useSelector(state => state.Category.listCategory);
  return (
    <ul className="article-item__categories">
      {categoriesId.map(item => <li key={item}><a href="/" className="btn btn-category">{categories && categories[item].name}</a></li>)}
    </ul>
  )
} 