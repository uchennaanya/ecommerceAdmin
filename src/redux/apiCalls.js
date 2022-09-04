import { publicRequest } from "../requestMethods";
import { loginFailure, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) =>{
    dispatch(loginSuccess())
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}
