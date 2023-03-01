import {IPost} from "../../../types/IPost";

export interface NewsState {
    news: IPost[]
    isLoading: boolean
    error: null | string
    limit: number
}

export enum NewsActionsEnum {
    FETCH_NEWS = 'FETCH_NEWS',
    FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS',
    FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR',
    SET_NEWS_LIMIT = 'SET_NEWS_LIMIT',
    DELETE_NEWS = 'DELETE_NEWS'
}

interface FetchNewsAction {
    type: NewsActionsEnum.FETCH_NEWS
}
interface FetchNewsSuccessAction {
    type: NewsActionsEnum.FETCH_NEWS_SUCCESS
    payload: IPost[]
}
interface FetchNewsErrorAction {
    type: NewsActionsEnum.FETCH_NEWS_ERROR
    payload: string
}
interface SetNewsLimitAction {
    type: NewsActionsEnum.SET_NEWS_LIMIT
    payload: number
}
interface DeleteNewsAction {
    type: NewsActionsEnum.DELETE_NEWS
    payload: number
}


export type NewsAction = FetchNewsAction | FetchNewsSuccessAction | FetchNewsErrorAction | SetNewsLimitAction | DeleteNewsAction
