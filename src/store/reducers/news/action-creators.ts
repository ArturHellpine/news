import {AppDispatch} from "../../index";
import NewsService from "../../../api/NewsService";
import {NewsActionsEnum} from "./types";
import {IPost} from "../../../types/IPost";

export const NewsActionCreators = {
    fetchNews: (limit: number) => async (dispatch: AppDispatch) => {
        try {
            dispatch({type: NewsActionsEnum.FETCH_NEWS})
            const response = await NewsService.fetchNews(limit)
            dispatch({type: NewsActionsEnum.FETCH_NEWS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: NewsActionsEnum.FETCH_NEWS_ERROR, payload: 'News not found'})
        }
    },
    getMoreNews: () => {
        return {type: NewsActionsEnum.SET_NEWS_LIMIT, payload: 50}
    },
    hideNews: () => {
        return {type: NewsActionsEnum.SET_NEWS_LIMIT, payload: 10}
    },
    deletePost: (post: IPost) => {
       return {type: NewsActionsEnum.DELETE_NEWS, payload: post.id}
    }
}