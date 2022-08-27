
function PostDetailRichText({ content }) {

  return (
    <div className="rte" >
      <div dangerouslySetInnerHTML={{ __html: content }} />
      {/* {content} */}
    </div>
  )
}

export default PostDetailRichText