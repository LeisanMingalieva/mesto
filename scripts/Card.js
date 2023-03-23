import { openPopup } from './index.js';
import { imagePopup, images, imagesCaption } from './constans.js'

class Card {
  constructor (data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }
  //получаем разметку карточки
  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);
    return cardElement;
  }
   //метод вставляет данные в разметку карточки и подготавливает карточку к публикации
  generatedCard () {
    this._element = this._getTemplate();
    this._setEventListeners();
      this._element.querySelector('.card__image').src = this._link;
      this._element.querySelector('.card__image').alt = this._name;
      this._element.querySelector('.card__name').textContent = this._name;
    return this._element;
  };
  _handleLikeCardClick() {
    this._element.querySelector('.card__like').classList.toggle('card__like_active');
  }
  _handleDeleteCardClick () {
    this._element.remove();
  }
  _handleOpenCardImage() {
    images.src = this._link;
    images.alt = this._name;
    imagesCaption.textContent = this._name;
    openPopup(imagePopup);
  }
  _setEventListeners() {
    this._element.querySelector('.card__like').addEventListener('click', () => {
      this._handleLikeCardClick()
    });
    this._element.querySelector('.card__delete').addEventListener('click', () => {
      this._handleDeleteCardClick()
    });
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleOpenCardImage()
    });
  }
};

export default Card;
