import { useSelector } from 'react-redux';

function PostDetailTags({tags}) {
  const listTags = useSelector (state => state.Category.hashTagsById);
  if(tags.length<=0 && (listTags[tags[0]]==='' || listTags[tags[0]]=== undefined)) return null;
  return (
    <div className="post-detail__tags">
      <h2>Tags</h2>
      <ul>
        {tags.map((tag,key)=>  listTags[tag]?<li key={key} className="post-detail__item"><a href="/" className="btn btn-default">{listTags[tag].name}</a></li>:'')}
      </ul>
    </div>
  )
}

export default PostDetailTags

