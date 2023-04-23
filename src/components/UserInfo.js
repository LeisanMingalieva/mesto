export default class UserInfo {
    constructor( { userNameSelector, userJobSelector, avatarSelector } ) {
        this._userName = document.querySelector(userNameSelector);
        this._userJob = document.querySelector(userJobSelector);
        this._avatar = document.querySelector(avatarSelector);
        this._userId = ''
    }
    getUserInfo() {
        return {
            name: this._userName.textContent,
            about: this._userJob.textContent,
            avatar: this._avatar.src
        }
    }

    setUserInfo(data) {
       this._userName.textContent = data.name
       this._userJob.textContent = data.about
       this._avatar.src = data.avatar
       this._avatar.alt = data.name
       this._userId = data._id
    }

    getUserId() {
        return this._userId
    }
}