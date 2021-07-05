export const getUsers = (state) => {
    return state.profilePage.users;
}

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