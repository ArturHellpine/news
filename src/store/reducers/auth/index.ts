import {AuthAction, AuthActionsEnum, AuthState} from "./types";
import {IUser} from "../../../models/IUser";

const initialState: AuthState = {
    isAuth: false,
    error: '',
    modal: false,
    user: {} as IUser
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionsEnum.SET_AUTH:
            return {...state, isAuth: action.payload}
        case AuthActionsEnum.SET_USER:
            return {...state, user: action.payload}
        case AuthActionsEnum.SET_MODAL:
            return {...state, modal: action.payload}
        case AuthActionsEnum.SET_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}