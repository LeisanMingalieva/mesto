export default class UserInfo {
    constructor( { userNameSelector, userJobSelector } ) {
        this._userName = document.querySelector(userNameSelector);
        this._userJob = document.querySelector(userJobSelector);
    }
    getUserInfo(name, job) {
            this._userName.value = name,
            this._userJob.value = job
    }

    setUserInfo(name, job) {
        this._userName.textContent = name,
        this._userJob.textContent = job
    }
    
    }