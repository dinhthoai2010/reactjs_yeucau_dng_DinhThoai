export default function ArticleItemThumb({link,img}) {
  return (
    <div className="article-item__thumbnail">
      <a href={link}>
        <img src={img} alt={img} />
      </a>
    </div>
  )
}