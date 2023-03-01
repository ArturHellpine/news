import {AuthActionsEnum, SetAuthAction, SetErrorAction, SetModalAction, SetUserAction} from "./types";
import {IAdmin} from "../../../types/IAdmin";
import {AppDispatch} from "../../index";
import axios from "axios";

export const AuthActionCreators = {
    setUser: (user: IAdmin): SetUserAction => ({type: AuthActionsEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: auth}),
    setError: (payload: string): SetErrorAction => ({type: AuthActionsEnum.SET_ERROR, payload}),
    setModal: (modal: boolean): SetModalAction => ({type: AuthActionsEnum.SET_MODAL, payload: modal}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get<IAdmin[]>('./admin.json')
            const mockUser = response.data.find(user => user.username === username && user.password === password)
            if(mockUser) {
                localStorage.setItem('auth', 'true')
                localStorage.setItem('username', mockUser.username)
                dispatch(AuthActionCreators.setIsAuth(true))
                dispatch(AuthActionCreators.setError(''))
                dispatch(AuthActionCreators.setModal(false))
                dispatch(AuthActionCreators.setUser(mockUser))
            } else {
                dispatch(AuthActionCreators.setError('Login or password is incorrect'))
            }
        } catch (e) {
            console.log(e)
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth')
        localStorage.removeItem('username')
        dispatch(AuthActionCreators.setUser({} as IAdmin))
        dispatch(AuthActionCreators.setIsAuth(false))
    }
}