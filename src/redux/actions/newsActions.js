import {SET_NEWS_LIST} from "../types/newsTypes"

export const setNewsListAction = (newsList) => {
    return (
        {type: SET_NEWS_LIST,
        payload: newsList}
    )
};