import {SET_LOADING_TRUE, SET_LOADING_FALSE} from "../types/appTypes"

const initialState = {
    loading: false
}


const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_LOADING_FALSE:
            return{
                ...state,
                loading: false
            }
        case SET_LOADING_TRUE:
            return{
                ...state,
                loading: true
            }
    
        default:
            return state
    }
}

export default appReducer;