import {SET_USER_LIST} from "../types/userTypes"


export const setUserListAction = (userList) => {
    return(
        {type:SET_USER_LIST,
        payload: userList}
    )
}