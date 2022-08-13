import './article-item.css';
import cls from 'classnames';
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemThumb from './ArticleItemThumb';
import ArticleItemTitle from './ArticleItemTitle';
import ArticleItemInfo from './ArticleItemInfo';
import ArticleItemCategories from './ArticleItemCategories';
import ArticleItemStats from './ArticleItemStats';

export default function ArticleItem({
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc = false,
  isShowCategoies = false,
  isShowAvatar = true,
  post,
}) {
  if (!post) return null;
  const classes = cls('article-item', {
    'style-card': isStyleCard,
    'style-row': isStyleRow,
  })
  const link = '/post/' + post.slug;
  return (
    <article className={classes}>
      <ArticleItemThumb link={link} img={post.thumbnail} />
      <div className="article-item__content">
        {isShowCategoies && <ArticleItemCategories />}
        {isShowCategoies && <ArticleItemStats />}
        <ArticleItemTitle title={post.title} url={link} />
        {isShowDesc && <ArticleItemDesc desc={post.excerpt} />}
        <ArticleItemInfo author={post.author} date = {post.createdDate} isShowAvatar={isShowAvatar} />
      </div>
    </article>
  )
}