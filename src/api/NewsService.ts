import axios, {AxiosPromise} from "axios";
import {IPost} from "../types/IPost";

export default class NewsService {
    static async fetchNews(limit: number): Promise<AxiosPromise<IPost[]>> {
        return axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
    }
}