import * as userService from "../../service/UserService"

export const getAllUserMiddle = () => async (dispatch) => {
    const res = await userService.getAll();
    dispatch({
        type: "get_all",
        payload: res
    })
}

