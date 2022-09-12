import ArticleGeneral from "../components/ArticleGeneral";
import ArticleLatest from "../components/ArticleLatest";
import ArticlePopular from "../components/ArticlePopular";

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { listGeneral, listLatest, listPopular } from '../store/post/action';
import { listDataCategoryAsy } from '../store/category/action';

function HomePage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listLatest({ per_page: 3, page:0 }))
    dispatch(listGeneral({ per_page: 4, page:0 }))
    dispatch(listPopular({ per_page: 3, page:0 }))

    dispatch(listDataCategoryAsy({ per_page: 100 }))
  });

  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleGeneral />
    </>
  )
}

export default HomePage