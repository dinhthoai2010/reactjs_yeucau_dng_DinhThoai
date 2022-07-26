import './post-detail.css'
import PostDetailComments from "./PostDetailComments"
import PostDetailRichText from "./PostDetailRichText"
import PostDetailTags from "./PostDetailTags"

function PostDetailContent( {post}) {
  console.log(post)
  return (
    <div className="post-detail__content">
      <PostDetailComments />

      <div className="thumbnail">
        <img src={post.image} alt="blog-title" />
      </div>
      <div className="content-padding">

        <PostDetailRichText content={post.content}/>

        <PostDetailTags tags={post.tags} />
        
      </div>
    </div>
  )
}

export default PostDetailContent