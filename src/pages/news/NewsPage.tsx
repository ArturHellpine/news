import React, { FC, useEffect } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { IPost } from "../../types/IPost";
import NewsList from "../../components/NewsList";
import './NewsPage.css'
import ErrorMessage from "../../components/error/ErrorMessage";
import Loader from "../../components/loader/Loader";

const NewsPage: FC = () => {
    const { news, error, isLoading, limit } = useTypedSelector(state => state.news)
    const { fetchNews, getMoreNews, deletePost } = useActions()

    useEffect(() => {
        fetchNews(limit)
    }, [limit])

    const downloadAllNews = () => {
        if(limit <= 10) {
            getMoreNews()
        }
    }

    const deleteNews = (post: IPost) => {
        deletePost(post.id)
    }

    return (
        <div className='news__page'>
            { error && <ErrorMessage error={error} /> }
            <NewsList deleteNews={deleteNews} news={news}/>
            { isLoading && <Loader/> }
            { !isLoading && !error && limit <=10 &&
                <button className='post__btn getMore' onClick={downloadAllNews}>Get all news</button>
            }
        </div>
    );
};

export default NewsPage;