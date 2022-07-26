import './article-item.css';
import cls from 'classnames';
import ArticleImage from './ArticleImage';
import Author from './Author';
import TitleArticle from './TitleArticle';
import ArticleDesc from './ArticleDesc';
import ArticleCategory from './ArticleCategory';

function ArticleItem({className,clsImg,post, show_desc, author,title,show_cat}) {
  
  let classes = cls('article-item', className);
  console.log(show_cat)
  return (
    <article className={classes}>
      <ArticleImage className={clsImg} href={post.href} src ={post.img}/>
      <div className="article-item__content">
        {show_cat && <ArticleCategory cats={post.cats} /> }
        <TitleArticle title={post.title}/>
        {show_desc && <ArticleDesc desc={post.desc} />}
        <Author img={author} author={post.author} />
      </div>
    </article>
  );
}

export default ArticleItem;