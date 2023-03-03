import { AppDispatch } from "../../index";
import NewsService from "../../../services/api/NewsService";
import { NewsActionsEnum } from "./types";

export const NewsActionCreators = {
    fetchNews: (limit: number) => async (dispatch: AppDispatch) => {
        try {
            dispatch({type: NewsActionsEnum.FETCH_NEWS})
            const response = await NewsService.fetchNews(limit)
            setTimeout(() => {
                dispatch({type: NewsActionsEnum.FETCH_NEWS_SUCCESS, payload: response.data})
            }, 500)
        } catch (e) {
            setTimeout(() => {
                dispatch({type: NewsActionsEnum.FETCH_NEWS_ERROR, payload: 'News not found'})
            }, 500)
        }
    },

    getMoreNews: () => {
        return {type: NewsActionsEnum.SET_NEWS_LIMIT, payload: 50}
    },

    deletePost: (id: number) => {
       return {type: NewsActionsEnum.DELETE_NEWS, payload: id}
    }
}