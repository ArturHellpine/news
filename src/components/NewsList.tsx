import React, {FC} from 'react';
import {IPost} from "../types/IPost";
import NewsItem from "./NewsItem";

interface NewsListProps {
    news: IPost[]
    deleteNews: (post: IPost) => void
}

const NewsList: FC<NewsListProps> = ({news, deleteNews}) => {
    return (
        <div>
            {news.map(post =>
                <NewsItem post={post} deleteNews={deleteNews} key={post.id} />
            )}
        </div>
    );
};

export default NewsList;