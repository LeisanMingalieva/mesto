export default class Card {
  constructor (data, userId, templateSelector, handleCardClick, handleCardLike, handleOpenDeletePopup) {
    this._name = data.name;
    this._link = data.link;
    this._cardId = data._id;
    this._likes = data.likes;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleOpenDeletePopup = handleOpenDeletePopup;
    this._handleCardLike = handleCardLike;
    this._owner = data.owner._id;
  }
  //получаем разметку карточки
  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);
    this._like = cardElement.querySelector('.card__like');
    this._delete = cardElement.querySelector('.card__delete');
    this._image = cardElement.querySelector('.card__image');
    this._cardName = cardElement.querySelector('.card__name');
    this._likeCount = cardElement.querySelector('.card__like-count')
    return cardElement;
  }
   //метод вставляет данные в разметку карточки и подготавливает карточку к публикации
  generatedCard () {
    this._element = this._getTemplate();

    this._setEventListeners();
    this._image.src = this._link;
    this._image.alt = this._name;
    this._cardName.textContent = this._name;
    this._likeCount.textContent = this._likes.length;

    if(this._likes.some(item=>item._id === this._userId)) {
      this._isLiked = true
      this._like.classList.add('card__like_active')
    } else {
      this._isLiked = false
      this._like.classList.remove('card__like_active')
    }

    if(this._userId !== this._owner) {
      this._delete.classList.add('card__delete_hidden')
    }
    
    return this._element;
  };

  handleLikeCardClick({ likes }) {
    this._likeCount.textContent = likes.length
    this._isLiked = !this._isLiked
    if(this._isLiked) {
      this._like.classList.add('card__like_active')
    } else {
      this._like.classList.remove('card__like_active')
    }
  }

  _handleDeleteCardClick() {
   this._handleOpenDeletePopup(this._cardId, this)
  }

  deleteCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._like.addEventListener('click', () => {
      this._handleCardLike(this._cardId, this._isLiked, this);
  });

    this._delete.addEventListener('click', () => {
      this._handleDeleteCardClick(this._cardId, this)
    });

    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
};