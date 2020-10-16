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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((res) => res.data)
    },
    followUsers(userId) {
        return instance.post(`follow/${userId}`)

    },
    unFollowUsers(userId) {
        return instance.delete(`follow/${userId}`)

    },

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(res => res.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(res => res.data);

    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status })

    },
    savePhoto(photoFile) {
        let formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(res => res.data)
    },
    login({ email, password, rememberMe = false, captcha = null }) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha }).then(res => res.data)
    },
    loginOut() {
        return instance.delete(`auth/login`).then(res => res.data)
    },
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`).then(res => res.data)
    },

}