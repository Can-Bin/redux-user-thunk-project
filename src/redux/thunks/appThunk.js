import axios from "axios"
import { setLoadingFalseAction, setLoadingTrueAction } from "../actions/appActions"
import { setUserListAction } from "../actions/userActions"

const getUserListThunk = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(setLoadingTrueAction())
            const res = await axios.get("https://jsonplaceholder.typicode.com/users/")
            console.log(res.data);
            dispatch(setUserListAction(res.data))
            // dispatch({ type: 'SET_USER_LIST', payload: res.data })
            
        } catch (error) {
            alert(error.message)
        } finally {
            dispatch(setLoadingFalseAction())
        }
    }
}

export default getUserListThunk;