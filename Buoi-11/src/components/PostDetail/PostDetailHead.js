
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/vi'

function PostDetailHead({ post }) {
  const author = post.author;
  const date = post.date;
  dayjs.extend(relativeTime)
  dayjs.locale('vi')
  if (author && author !== undefined)
    return (
      <div className="post-detail__head">
        <div className="tcl-container">
          <h1 className="post-detail__title">{post.title}</h1>
          <ul className="post-detail__info">
            <li className="item author">
              By <a href="/"><strong>{author.nickName}</strong></a>
            </li>
            <li className="item date">
              {dayjs(date).format('DD/MM/YYYY')}
            </li>
            <li className="item views">
              {post.viewCount} <i className="icons ion-ios-eye" />
            </li>
            <li className="item comments">
              {post.commentCount} <i className="icons ion-ios-chatbubble" />
            </li>
          </ul>
        </div>
      </div>
    )
    else return ''
  
  }

export default PostDetailHead