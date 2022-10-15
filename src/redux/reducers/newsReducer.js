import {SET_NEWS_LIST} from "../types/newsTypes"
const initialState = {
    newsList:[]
}

const newsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_NEWS_LIST:
            return{
                ...state,
                newsList:action.payload
            };
        
        default:
            return state
    }
}

export default newsReducer;