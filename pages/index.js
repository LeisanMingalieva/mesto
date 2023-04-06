import Card from "../components/Card.js";
import { initialCards, formValidationConfig } from "../utils/constans.js";
import {popupList, profileEditButton, nameInput, jobInput, profileName, profileJob, profileForm, addButton, cardForm, placeInput, linkInput, images, imagesCaption,cardsContainer } from '../utils/constans.js'
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const handleProfileFormSubmit = () => {
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  //const userData = userInfo.setUserInfo(nameInput.value, jobInput.value)  
  validators[profileForm.getAttribute('name')].toggleButton();
  //return userData;
}
const imagePopup = new PopupWithImage('.popup_type_image');
const cardPopup = new PopupWithForm('.popup popup_type_card', handleCardSubmit);
const userInfo = new UserInfo( {userNameSelector:'.popup__form-item_el_name', userJobSelector:'.popup__form-item_el_job'})
const profilePopup = new PopupWithForm('.popup_type_profile', handleProfileFormSubmit);

//валидация форм
const forms = document.querySelectorAll('.popup__form-container');
const validators = {};
forms.forEach((formElement) => {
  const formValidator = new FormValidator(formValidationConfig, formElement);
  validators[formElement.getAttribute('name')] = formValidator;
  formValidator.enableValidation();
})
//функция увеличения изображения по клику на него
const handleCardClick = (name,link) => {
  imagePopup.open(name, link);
}
//создание новой карточки
const createCard = (...args) => {
  const newCard =  new Card(...args);
  return newCard.generatedCard();
}
//отрисовка карточек
const renderCard = (item) => {
  const card = createCard(item, '#cards-template', handleCardClick)
  cardList.addItem(card);
}
//отрисовка карточек "из коробки"
const cardList = new Section ( {
  items:initialCards,
  renderer: renderCard,
}, '.cards');
cardList.renderItems();

const handleEditButtonClick = () => {
  profilePopup.open();
  const userData = userInfo.getUserInfo(profileName.textContent, profileJob.textContent)  
  validators[profileForm.getAttribute('name')].toggleButton();
  return userData;
};
//открытие формы добавления карточки
const handleAddButtonClick = () => {
  cardPopup.open();
  validators[cardForm.getAttribute('name')].toggleButton();
};
//сoхранение данных в форме редактирования профиля

//добавление новой карточки при нажатии кнопку добавления
function handleCardSubmit() {
  //evt.preventDefault();
  const item = {
    name: placeInput.value,
    link: linkInput.value,
  };
  renderCard(item);
  cardPopup.close();
  //evt.target.reset(); //очистка формы после закрытия
}


profileForm.addEventListener('submit', handleProfileFormSubmit);
cardForm.addEventListener('submit', handleCardSubmit);
profileEditButton.addEventListener('click', handleEditButtonClick);
addButton.addEventListener('click', handleAddButtonClick);

//слушатели для попапов
imagePopup.setEventListeners();
cardPopup.setEventListeners();
profilePopup.setEventListeners();
