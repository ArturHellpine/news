import React from "react";
import MainPage from "../pages/main/MainPage";
import NewsPage from "../pages/news/NewsPage";
import ProfilePage from "../pages/profile/ProfilePage";

export interface IRoute {
    path: string
    element: React.ElementType
}

export enum RouteNames {
    MAIN = '/main',
    NEWS = '/news',
    PROFILE = '/profile',
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.MAIN, element: MainPage},
    {path: RouteNames.NEWS, element: NewsPage},
]
export const privateRoutes: IRoute[] = [
    {path: RouteNames.PROFILE, element: ProfilePage},
]