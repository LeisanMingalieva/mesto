export default class Api {
  constructor (config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  getInitialCards() {
    return fetch(`${this.url}/cards`, {
        method: 'GET',
        headers:this.headers,
    })
    .then(this._checkResponse);
  }

  getUserData() {
    return fetch(`${this.url}/users/me`, {
        method: 'GET',
        headers: this._headers
    }) .then(this._checkResponse);
 }

  setUserData(data) {
    return fetch(`${this.url}/users/me`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
            name: data.name,
            about: data.about
        })
     })
    .then(this._checkResponse)
  }
  
  setUserAvatar(data) {
    return fetch(`${this.url}/users/me/avatar`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
            avatar: data.avatar
        })
     })
    .then(this._checkResponse)
  }

  _checkResponse = res => {
    if(res.ok) {
        return res.json()
    }
    return Promise.reject(`Ой, ошибка ${res.status}`)
  }  
}