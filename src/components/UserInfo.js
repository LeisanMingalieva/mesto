export default class UserInfo {
    constructor( { userNameSelector, userJobSelector, avatarSelector } ) {
        this._userName = document.querySelector(userNameSelector);
        this._userJob = document.querySelector(userJobSelector);
        this._avatar = document.querySelector(avatarSelector);
    }
    getUserInfo() {
            return {
                name: this._userName.textContent,
                about: this._userJob.textContent,
            }
    }

    setUserInfo(data) {
        this._userName.textContent = data.name,
        this._userJob.textContent = data.about
    }

    setUserAvatar(avatar) {
        this._avatar.style.backgroundImage = `url(${avatar})`
    }
}