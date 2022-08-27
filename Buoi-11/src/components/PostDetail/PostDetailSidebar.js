import PostDetailAuthor from "./PostDetailAuthor"
import PostDetailRelatedPosts from "./PostDetailRelatedPosts"

function PostDetailSidebar({post}) {
  // console.log(post)
  return (
    <div className="post-detail__side">
      <PostDetailAuthor author={post.author}/>
      <div className="spacing" />
      <PostDetailRelatedPosts category={post.categories}/>
    </div>
  )
}

export default PostDetailSidebar