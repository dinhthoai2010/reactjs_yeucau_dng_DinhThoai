import ArticleItem from "../ArticleItem";
import Button from "../shared/Button";

function ArticleGeneral({post}) {
  const posts = [post, post, post, post, post, post, post,post];
  let htmlPost = posts.map((p,key)=> {
    return <div key={key} className="tcl-col-12 tcl-col-md-6">
              <ArticleItem key={key} className="style-card"  clsImg="article-item__thumbnail" post={p}  />
          </div>
  })
  
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
          <h2>News List</h2>
          <a href="/" className="btn btn-default">View More</a>
        </div>
        <div className="tcl-row">
        { htmlPost}
        </div>
        <Button />
      </div>
    </div>
  );
}

export default ArticleGeneral;