import React, { FC } from 'react';
import { IPost } from "../types/IPost";
import NewsItem from "./NewsItem";
import { TransitionGroup, CSSTransition } from "react-transition-group"

interface NewsListProps {
    news: IPost[]
    deleteNews: (post: IPost) => void
}

const NewsList: FC<NewsListProps> = ({news, deleteNews}) => {
    return (
        <div className='posts__wrapper'>
            <TransitionGroup>
                {news.map(post =>
                    <CSSTransition key={post.id} timeout={500} classNames='post'>
                        <NewsItem post={post} deleteNews={deleteNews} key={post.id} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default NewsList;