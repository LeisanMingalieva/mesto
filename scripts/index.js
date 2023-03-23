import Card from "./Card.js";
import { initialCards, formValidationConfig } from "./constans.js";
import {popupList, profileEditButton, profilePopup, nameInput, jobInput, profileName, profileJob, profileForm, addButton, cardPopup, cardForm, placeInput, linkInput } from './constans.js'
import FormValidator from "./FormValidator.js";

//валидация форм
const forms = document.querySelectorAll('.popup__form-container');
forms.forEach((formElement) => {
const formValidator = new FormValidator(formValidationConfig, formElement);
formValidator.enableValidation();
})
//функция создания карточки через класс
const createCard = (...args) => {
  return new Card(...args);
}
//функция отрисовки карточки
const renderCard = (element) => {
  const card = createCard(element, '#cards-template');
  const cardElement = card.generatedCard();
  document.querySelector('.cards').prepend(cardElement);
}
//выведение карточек "из коробки" через класс Card
initialCards.forEach(element => {
  renderCard(element);
});
//функция открытия попапа
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}
//функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}
//закрытие попапа нажатием на кнопку Escape
function closePopupEsc(evt) {
  if(evt.key === 'Escape')
   if(document.querySelector('.popup_opened'))
     closePopup(document.querySelector('.popup_opened'));
}
//закрытие попапа нажатием на оверлей и крестик
popupList.forEach((popupElement)=> {
  popupElement.addEventListener('mousedown', function (evt) {
    if(evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
      closePopup(popupElement);
    } 
  })
})
//открытие формы редактирования профиля
const handleEditButtonClick = () => {
  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  //toggleButton(profileForm, formValidationConfig);
};
//открытие формы добавления карточки
const handleAddButtonClick = () => {
  openPopup(cardPopup);
  //toggleButton(cardForm, formValidationConfig);
};
//сoхранение данных в форме редактирования профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopup);
}
//функция добавления карточек
function addCard(el) {
 renderCard(el);
}
//добавление новой карточки при нажатии кнопку добавления
function handleCardSubmit(evt) {
  evt.preventDefault();
  const item = {
    name: placeInput.value,
    link: linkInput.value,
  };
  addCard(item);
  closePopup(cardPopup);
  evt.target.reset(); //очистка формы после закрытия
}

profileForm.addEventListener('submit', handleProfileFormSubmit);
cardForm.addEventListener('submit', handleCardSubmit);
profileEditButton.addEventListener('click', handleEditButtonClick);
addButton.addEventListener('click', handleAddButtonClick);
