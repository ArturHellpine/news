import React, {FC} from 'react';
import {IPost} from "../types/IPost";

interface NewsItemProps {
    post: IPost
    deleteNews: (post: IPost) => void
}

const NewsItem: FC<NewsItemProps> = ({post, deleteNews}) => {
    return (
        <div key={post.id} style={{border: '1px solid gray', padding: '5px'}}>
            {post.id}. {post.title} <br/> {post.body}
            <button onClick={() => deleteNews(post)}>delete</button>
        </div>
    );
};

export default NewsItem;