import React from "react";
import MainPage from "../pages/MainPage";
import NewsPage from "../pages/NewsPage";
import ProfilePage from "../pages/ProfilePage";

export interface IRoute {
    path: string
    element: React.ElementType
}

export enum RouteNames {
    MAIN = '/main',
    NEWS = '/news',
    PROFILE = '/profile'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.MAIN, element: MainPage},
    {path: RouteNames.NEWS, element: NewsPage},
]
export const privateRoutes: IRoute[] = [
    {path: RouteNames.PROFILE, element: ProfilePage},
]