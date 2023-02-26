import {IUser} from "../../../models/IUser";

export interface AuthState {
    isAuth: boolean
    user: IUser
    modal: boolean
    error: string
}

export enum AuthActionsEnum {
    SET_AUTH = 'SET_AUTH',
    SET_USER = 'SET_USER',
    SET_MODAL = 'SET_MODAL' ,
    SET_ERROR = 'SET_ERROR'
}

export interface SetAuthAction {
    type: AuthActionsEnum.SET_AUTH
    payload: boolean
}
export interface SetUserAction {
    type: AuthActionsEnum.SET_USER
    payload: IUser
}
export interface SetModalAction {
    type: AuthActionsEnum.SET_MODAL
    payload: boolean
}
export interface SetErrorAction {
    type: AuthActionsEnum.SET_ERROR
    payload: string
}

export type AuthAction = SetAuthAction | SetUserAction | SetErrorAction | SetModalAction