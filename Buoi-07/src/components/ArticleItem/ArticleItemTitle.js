import { Link } from 'react-router-dom';

export default function ArticleItemTitle({title,url}) {
  return (
    <h2 className="article-item__title">
      <Link to={url}>{title}</Link>
    </h2>
  )
}