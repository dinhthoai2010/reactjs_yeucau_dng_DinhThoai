import './post-detail.css'
import PostDetailComments from "./PostDetailComments"
import PostDetailRichText from "./PostDetailRichText"
import PostDetailTags from "./PostDetailTags"

function PostDetailContent(post) {
 
  if(post===undefined) return null;
 
  return (
    <div className="post-detail__content">
      <div className="thumbnail">
        <img src={post.thumbnail} alt={post.title} />
      </div>
      <div className="content-padding">
        <PostDetailRichText content={post.contentHTML} />

        <PostDetailTags />

        <PostDetailComments />
      </div>
    </div>
  )
}

export default PostDetailContent