import axios from "axios"
import { setLoadingFalseAction, setLoadingTrueAction } from "../actions/appActions"
import { setNewsListAction } from "../actions/newsActions"

const getNewsThunk = () => {
    
    return async (dispatch, getState) => {
        try {
            dispatch(setLoadingTrueAction())
            const res = await axios.get('https://bing-news-search1.p.rapidapi.com/news', {
                params: { safeSearch: 'Off', textFormat: 'Raw' },
                headers: {
                    'x-bingapis-sdk': 'true',
                    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
                    'x-rapidapi-key': '349f5e0b59mshef6cfbb2b4a459bp1648abjsn6f46abe5aae1'
                }
            })
            console.log(res.data.value)
            dispatch(setNewsListAction(res.data.value))
        } 
        catch (error) {
            alert(error.message)
        }
        finally {
            dispatch(setLoadingFalseAction())
        } 
        
    }
}

export default getNewsThunk