import CommentBtn from './CommentBtn'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'
import './comments.css'

function PostDetailComments() {
  return (
    <div className="post-detail__comments">
      <CommentForm />
      <p>20 Comments</p>
      <ul className="comments">
        {/* Comment 1 */}
        <CommentItem />
        <li className="item">
          <CommentItem />
          {/* Reply Comments */}
          <ul className="comments">
            <li className="item">
              <CommentItem />
            </li>
            <li className="item">
              <CommentItem />
            </li>
          </ul>
          {/* Reply form */}
          <CommentForm />
        </li>
        {/* Comment 2 */}
        <li className="item">
          <CommentItem />
          <CommentBtn />
        </li>
        {/* Comment 3 */}
        <li className="item">
          <CommentItem />
        </li>
        
      </ul>
      
    </div>
  )
}

export default PostDetailComments