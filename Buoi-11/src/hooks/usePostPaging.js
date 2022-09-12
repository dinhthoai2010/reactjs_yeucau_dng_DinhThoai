import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { actFetchArticlesAsync } from "../store/post/actions";

export function  usePostsPaging ({
    extraParams = {}
}={}) {
    const dispatch = useDispatch();

    const {
        list : posts, total, totalPages, currentPage
    } = useSelector(state =>state.Post.articlePaging)

    const [loading, setLoading] = useState(false)
    const hasMorePost = currentPage < totalPages

    function handleLoadMore () {
        if(loading) {
            return
        }

        setLoading(true)
        const params = {
            currentPage: currentPage +1,
            ...extraParams
        }

        dispatch(actFetchArticlesAsync(params)).then(() =>
        {setLoading(false)})

    }
}