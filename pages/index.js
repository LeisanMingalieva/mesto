import Card from "../components/Card.js";
import { initialCards, formValidationConfig } from "../utils/constans.js";
import { profileEditButton, nameInput, jobInput, profileName, profileJob, profileForm, addButton, cardForm, placeInput, linkInput } from '../utils/constans.js'
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

//сoхранение данных в форме редактирования профиля
const handleProfileFormSubmit = () => {
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;    
  validators[profileForm.getAttribute('name')].toggleButton();
}
//экземпляры классов
const imagePopup = new PopupWithImage('.popup_type_image');
const cardPopup = new PopupWithForm('.popup_type_card', handleCardSubmit);
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
const createCard = (data, templateSelector, func) => {
  const newCard =  new Card(data, templateSelector, func);
    return newCard.generatedCard();
}
//отрисовка карточек
const renderCard = (item) => {
  const card = createCard(item, '#cards-template', handleCardClick);
  cardList.addItem(card);
}
//отрисовка карточек "из коробки"
const cardList = new Section ( {
  items:initialCards,
  renderer: renderCard,
}, 
  '.cards');
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
//добавление новой карточки при нажатии кнопку добавления
function handleCardSubmit() {
  const item = {
    name: placeInput.value,
    link: linkInput.value,
  };
  renderCard(item);
}
//слушатели
profileForm.addEventListener('submit', handleProfileFormSubmit);
cardForm.addEventListener('submit', handleCardSubmit);
profileEditButton.addEventListener('click', handleEditButtonClick);
addButton.addEventListener('click', handleAddButtonClick);

//слушатели для попапов
imagePopup.setEventListeners();
cardPopup.setEventListeners();
profilePopup.setEventListeners();
