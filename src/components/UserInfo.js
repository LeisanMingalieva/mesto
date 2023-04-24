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
    
    setUserInfo( { name, about, avatar, _id } ) {
       this._userName.textContent = name
       this._userJob.textContent = about
       this._avatar.src = avatar
       this._avatar.alt = name
       this._userId = _id
    }

    getUserId() {
        return this._userId
    }
}