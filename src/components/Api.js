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
        headers: this.headers
    }) .then(this._checkResponse);
 }

  setUserData(userInfo) {
    return fetch(`${this.url}/users/me`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
            name: userInfo.name,
            about: userInfo.about
        })
     })
    .then(this._checkResponse)
  }
  
  setUserAvatar(userInfo) {
    return fetch(`${this.url}/users/me/avatar`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
            avatar: userInfo.avatar
        })
     })
    .then(this._checkResponse)
  }

  postNewCard(card) {
    return fetch(`${this.url}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: card.name,
        link: card.link
      })
    })
    .then(this._checkResponse)
  }

  deleteCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then(this._checkResponse)
  }

  likeCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this.headers
    })
    .then(this._checkResponse)
  }

  dislikeCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this.headers
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