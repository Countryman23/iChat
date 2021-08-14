import * as axios from 'axios'; //* импортируем всё что есть в библиотеке axios

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "b945a48b-e23b-46ca-a66f-5493b89d60ce"
    }
});//Инстансы (ООП), настраиваем его что бы он работал взамен axios

export const apiGetUsers = (carrentPage, pageSize) => {
    // return axios.get(baseUrl + `users?page=${carrentPage}&count=${pageSize}`,
    return instance.get(`users?page=${carrentPage}&count=${pageSize}`) //baseURL подставляется автомотически перед users?
        .then(response => response.data); // это ПРОМИС! Тут мы говорим, 
        //возвращяй нам не тот промис который мы получаем методом get
        //мы из полученного response берём data, и возращяем data
        //в итоге мы ретурним не то что вернул нам get, а то что вернул нам then
        //а then нам вернул другой промис
        //буквально мы написали return response.data
    }

//просмотр профиля пользователя
export const apiUsersRouter = (userId) => {
    // return axios.get(baseUrl + `profile/` + userId) 
    return instance.get(`profile/` + userId) //baseURL подставляется автомотически перед profile/
    .then(response => response.data);
}

export const apiAuthProfile = () => {
    // return axios.get(baseUrl + `auth/me`, 
    return instance.get(`auth/me`) //baseURL подставляется автомотически перед auth/me
    .then(response => response.data);
}

export const apiFollowUser = (userId) => {
    return instance.post(`follow/${userId}`, {}) //instance подставляется автомотически и headers тоже
    .then(response => response.data);
}

export const apiUnfollowUser = (userId) => {
    return instance.delete(`follow/${userId}`) //instance подставляется автомотически и headers тоже
    .then(response => response.data);
}

export const apiStatusInfo = (userId) => {
    return instance.get(`profile/status/` + userId)
    .then(response => response.data);
}

export const apiUpdateStatusInfo = (status) => {
    return instance.put(`profile/status/`, {status: status}) // put означает обновление. {status: status} смотрим в АПИшке какие данные нужно изменять
    .then(response => response.data);
}

export const apiLogin = (email, password, rememberMe = false ) => {
    return instance.post(`auth/login/`, {email, password, rememberMe})
    .then(response => response.data);
}

export const apiLogout = () => {
    return instance.delete(`auth/login/`)
    .then(response => response.data);
}

export const apiSavePhoto = (photoFile) => {
    const formData = new FormData();
    formData.append("image", photoFile);
    
    return instance.put(`auth/photo`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    .then(response => response.data);
}
