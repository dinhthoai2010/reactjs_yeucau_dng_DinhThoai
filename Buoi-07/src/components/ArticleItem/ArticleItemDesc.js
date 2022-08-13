

export default function ArticleItemDesc({desc}) {
  return (
    <p className="article-item__desc" dangerouslySetInnerHTML={{__html: desc}}></p>
  )
}