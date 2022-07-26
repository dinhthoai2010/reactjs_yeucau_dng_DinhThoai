import './article-item.css';
import cls from 'classnames';
import ArticleImage from './ArticleImage';
import ArticleAuthor from './ArticleAuthor';
import Author from './Author';
import TitleArticle from './TitleArticle';

function ArticleItem({className,post, show_desc, author,title}) {
  
  let classes = cls('article-item', className);

  return (
    <article className={classes}>
      <ArticleImage href={post.href} src ={post.img}/>
      <div className="article-item__content">
        <TitleArticle title={post.title}/>
        {show_desc && <TitleArticle title={post.desc}/>}
        <Author img={author} author={post.author} />
      </div>
    </article>
  );
}

export default ArticleItem;