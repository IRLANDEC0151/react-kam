import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "2feaf889-078a-4e8a-bde2-ae160c7f8acd",
    },
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).
            then((res) => res.data)
    }
}
export const followAPI = {
    followUsers(userId) {
        return instance.post(`follow/${userId}`)
            .then((res) => res.data.resultCode)
    },
    unFollowUsers(userId) {
        return instance.delete(`follow/${userId}`)
            .then((res) => res.data.resultCode)
    }
}