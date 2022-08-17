// import { Link } from 'react-router-dom';

import { Link } from "react-router-dom";

export default function ArticleItemTitle() {
  let url = `/post/only-someone-who's-seen-the-mummy-will-pass-this/`
  return (
    <h2 className="article-item__title">
      <Link
        to={url}
      >Only Someone Who's Seen The Mummy Will Pass This</Link>
    </h2>
  )
}

