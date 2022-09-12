import { useSelector } from "react-redux"

import CommentAction from './CommentAction'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'
import './comments.css'

function PostDetailComments() {

  const comment = useSelector(state => state.Comment.listComment);
  console.log(comment)
  if(comment.length===0) return null;
    console.log(comment)
  
  return (
    <div className="post-detail__comments">
      <CommentForm />
      <p>20 Comments</p>

      <ul className="comments">
        {comment.map((item,key)=> <CommentItem key={key} comment={item} parentId={0} />)}
      </ul>

      <CommentAction count={43} parent={true} spacingTop />
    </div>
  )
}

export default PostDetailComments