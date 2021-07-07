import { createSelector } from "reselect";

export const getUsers = (state) => {
    return state.profilePage.users;
}

// Реселектор. Необходим для сравнения старых данных с новыми.
// При наличии изменени отрисовка
// нет изменений ничего не перерисовываем
export const getUsersRESelector = createSelector(getUsers, (users) => {
    return users.filter(u => true);
})

export const getPageSize = (state) => {
    return state.profilePage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.profilePage.totalUsersCount;

}
export const getCarrentPaget = (state) => {
    return state.profilePage.carrentPage;

}
export const getIsLoading = (state) => {
    return state.profilePage.isLoading;

}
export const getFollowingInProcess = (state) => {
    return state.profilePage.followingInProcess;
}