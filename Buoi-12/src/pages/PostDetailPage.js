
import { useEffect, useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import PostDetailContent from "../components/PostDetail/PostDetailContent"
import PostDetailHead from "../components/PostDetail/PostDetailHead"
import PostDetailSidebar from "../components/PostDetail/PostDetailSidebar"
import { actFetchPostDetailAsync } from "../store/post/actions"
import IconLoading from '../components/shared/IconLoading'
import PageNotFound from '../components/PageNotFound/PageNotFound';

function PostDetailPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const slug = params.slug;
  const [status, setStatus] = useState('loading');

  const post = useSelector(state => state.Post.postDetail);
 
  useEffect(() => {
    dispatch(actFetchPostDetailAsync(slug))
      .then(res => {
        if (res.ok) {
          setStatus('success')
          
        } else {
          setStatus('error')
        }
      })
  }, [slug, dispatch])

  if (status === 'loading') {
    return (
      <div className="articles_list section">
        <div className="tcl-container">
          <div className="tcl-row tcl-jc-center">
            <IconLoading width="150px" />
          </div>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="tcl-container">
        <PageNotFound />
      </div>
    )
  }

  return (
    <main className="post-detail">
      <div className="spacing" />

      <PostDetailHead />

      <div className="spacing" />

      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent post={post} />

            <PostDetailSidebar />
          </div>
        </div>
      </div>
    </main>

  )
}

export default PostDetailPage