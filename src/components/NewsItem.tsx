import React, { FC } from 'react';
import { IPost } from "../types/IPost";

interface NewsItemProps {
    post: IPost
    deleteNews: (post: IPost) => void
}

const NewsItem: FC<NewsItemProps> = ({post, deleteNews}) => {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{post.id}. {post.title}</strong>
                <div>{post.body}</div>
            </div>
            <div>
                <button className='post__btn' onClick={() => deleteNews(post)}>DELETE</button>
            </div>
        </div>
    );
};

export default NewsItem;