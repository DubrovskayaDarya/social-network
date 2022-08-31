import axios from "axios";
import { userType} from "../reducers/users-reducer";

//Constants
const BASE_URL = 'https://social-network.samuraijs.com/api/1.0';

export const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'API-KEY': "5a8d76c1-1e2a-49db-b28c-bfbbd3f744da"
    }
});

//API
export const socialNetworkAPI = {
    getUsers(page: number) {
        return (
            instance.get<getUsersResponseType>(`/users?page=${page}&count=${5}`)
        )
    },
    followUser(userId: number) {
        return (
            instance.post<followResponseType>('/follow/' + userId)
        )
    },
    unfollowUser(userId: number) {
        return (
            instance.delete<followResponseType>('/follow/' + userId)
        )
    }
}

//Response Types

type getUsersResponseType = {
    items: Array<userType>
    totalCount: number
    error: null | string
};
type followResponseType = {
    resultCode: number
    messages: Array<string>,
    data: {}
}
