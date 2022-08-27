
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import PostDetailContent from "../components/PostDetail/PostDetailContent"
import PostDetailHead from "../components/PostDetail/PostDetailHead"
import PostDetailSidebar from "../components/PostDetail/PostDetailSidebar"
import { actFetchGetPostAsync } from "../store/post/actions"

function PostDetailPage() {
  const params = useParams()

  const dispatch = useDispatch();
  const [post, setPost] = useState({});
  useEffect(() => {
    dispatch(actFetchGetPostAsync(params)).then(post => {
      setPost(post)
    })
  },[])

  if(post.id === '' || post.id === undefined){
    return null
  }
  return (
    <main className="post-detail">
      <div className="spacing" />
      <PostDetailHead post={post}/>
      <div className="spacing" />

      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent post={post} />

            <PostDetailSidebar  post={post} />
          </div>
        </div>
      </div>
    </main>

  )
}

export default PostDetailPage