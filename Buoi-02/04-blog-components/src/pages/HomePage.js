import ArticleLatest from "../components/ArticleLatest";
import ArticlePopular from "../components/ArticlePopular";
import ArticleGeneral from "../components/ArticleGeneral";

function HomePage() {
  
  const author = {
    name: "Tuy Phong",
    img : "assets/images/john-doe.png",
    date: "June 02, 2020",
    time: "2 min"
  }

  const post = {
    title: "Only Someone Who's Seen The Mummy Will Pass This",
    img : "assets/images/blog-1.jpg",
    href: "/123123",
    desc: "Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to…",
    author: author
  }


  return (
    <>
      <ArticleLatest post={post}/>
      <ArticlePopular post={post}/>
      <ArticleGeneral post={post}/>
    </>
  );
}

export default HomePage;