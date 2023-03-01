import {NewsAction, NewsActionsEnum, NewsState} from "./types";

const initialState: NewsState = {
    news: [],
    isLoading: false,
    error: null,
    limit: 10,
}

export const newsReducer = (state = initialState, action: NewsAction): NewsState => {
    switch (action.type) {
        case NewsActionsEnum.FETCH_NEWS:
            return {...state, isLoading: true}
        case NewsActionsEnum.FETCH_NEWS_SUCCESS:
            return {...state, isLoading: false, news: action.payload}
        case NewsActionsEnum.FETCH_NEWS_ERROR:
            return {...state, isLoading: false, error: action.payload}
        case NewsActionsEnum.SET_NEWS_LIMIT:
            return {...state, limit: action.payload}
        case NewsActionsEnum.DELETE_NEWS:
            return {...state, ...state.news.filter(n => n.id !== action.payload)}
        default:
            return state
    }
}