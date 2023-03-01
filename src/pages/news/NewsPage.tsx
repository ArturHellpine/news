import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {IPost} from "../../types/IPost";
import NewsList from "../../components/NewsList";

const NewsPage: FC = () => {
    const {news, error, isLoading, limit} = useTypedSelector(state => state.news)
    const {fetchNews, getMoreNews, hideNews, deletePost} = useActions()

    useEffect(() => {
        fetchNews(limit)
    }, [limit])

    const getOrHideNews = () => {
        if(limit <= 10) {
            getMoreNews()
        }
        else hideNews()
    }
    const deleteNews = (post: IPost) => {
        deletePost(post)
    }

    return (
        <div>
            <button onClick={getOrHideNews}>
                {limit <= 10 ? 'More news' : 'Hide news'}
            </button>
            <NewsList deleteNews={deleteNews} news={news} />
        </div>
    );
};

export default NewsPage;