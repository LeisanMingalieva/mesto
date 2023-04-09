export default class Card {
  constructor (data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
    return cardElement;
  }
   //метод вставляет данные в разметку карточки и подготавливает карточку к публикации
  generatedCard () {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._image.src = this._link;
    this._image.alt = this._name;
    this._cardName.textContent = this._name;
    return this._element;
  };
  //метод активаци/дезактивации кнопки лайк
  _handleLikeCardClick() {
    this._like.classList.toggle('card__like_active');
  }
  //метод удаления карточки
  _handleDeleteCardClick () {
    this._element.remove();
  }
  _setEventListeners() {
    this._like.addEventListener('click', () => {
      this._handleLikeCardClick()
    });
    this._delete.addEventListener('click', () => {
      this._handleDeleteCardClick()
    });
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
};