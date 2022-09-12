import { formatRelativeDate } from "../../helpers";
import CommentAction from "./CommentAction"
import CommentForm from "./CommentForm"


function CommentItem(props) {
  const isThisParent = props.parentId === 0
  const comment = props.comment;
  if(comment===undefined)  return null;
  // console.log(comment.commentReplyCount)

  const {dateRelative,dateFormatted} = formatRelativeDate(comment.date);
  return (
    <li className="item">
      <div className="comments__section">
        <div className="comments__section--avatar">
          <a href="/">
            <img src="/assets/images/avatar1.jpg" alt="" />
          </a>
        </div>
        <div className="comments__section--content">
          <a href="/" className="comments__section--user">John Smith</a>
          <p className="comments__section--time">{dateRelative}</p>
          <p className="comments__section--text" dangerouslySetInnerHTML={{ __html: comment.content }}/>
          {/* { && <i class="ion-reply comments__section--reply"></i>} */}
          <div  />
        </div>
      </div>

      {/* Reply Comments */}
      {
        isThisParent && (
          <ul className="comments">
            <CommentItem parentId={1313213} />
            <CommentItem parentId={4253535} />
          </ul>
        )
      }
      {
        comment.commentReplyCount>0 && (
          <CommentAction  count={ comment.commentReplyCount} />
        )
      }
      {/* Reply form */}
      {isThisParent && false && <CommentForm />}
    </li>
  )
}

export default CommentItem