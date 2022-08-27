import './post-author.css'

function PostDetailAuthor({author}) {
  if(author && author!==undefined) 
  return (
    <div className="post-author">
      <div className="post-author__bg-avatar">
        <a href="/" className="post-author__avatar">
          <img src={author.avatar} alt="" />
        </a>
      </div>
      <div className="post-author__nickname">
        <a href="/">{author.nickName}</a>
      </div>
      <p className="post-author__desc">{author.description}</p>
    </div>

  )
  return null
}

export default PostDetailAuthor