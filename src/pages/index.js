import './index.css';
import Card from "../components/Card.js";
import { initialCards, formValidationConfig } from "../utils/constans.js";
import { profileEditButton, nameInput, jobInput, profileForm, addButton, cardForm } from '../utils/constans.js'
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

//экземпляры классов
const imagePopup = new PopupWithImage('.popup_type_image');
const userInfo = new UserInfo( {userNameSelector:'.profile__name', userJobSelector:'.profile__text'})
const profilePopup = new PopupWithForm('.popup_type_profile', {handleSubmitForm: (userData) => {
  userInfo.setUserInfo(userData.name,userData.job)  
  validators[profileForm.getAttribute('name')].toggleButton();
}});
const cardPopup = new PopupWithForm('.popup_type_card', {handleSubmitForm: (cardData) => {
renderCard(cardData)
}});

//открытие формы редактирования профиля
const handleEditButtonClick = () => {
  profilePopup.open();
  const userData = userInfo.getUserInfo()
  nameInput.value = userData.name,
  jobInput.value = userData.job
  validators[profileForm.getAttribute('name')].toggleButton();
};

//открытие формы добавления карточки
const handleAddButtonClick = () => {
  cardPopup.open();
  validators[cardForm.getAttribute('name')].toggleButton();
};

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

//функция увеличения изображения по клику на него
const handleCardClick = (title,link) => {
  imagePopup.open(title, link);
}

//валидация форм
const forms = document.querySelectorAll('.popup__form-container');
const validators = {};
forms.forEach((formElement) => {
  const formValidator = new FormValidator(formValidationConfig, formElement);
  validators[formElement.getAttribute('name')] = formValidator;
  formValidator.enableValidation();
});

//слушатели
profileEditButton.addEventListener('click', handleEditButtonClick);
addButton.addEventListener('click', handleAddButtonClick);

//слушатели для попапов
imagePopup.setEventListeners();
cardPopup.setEventListeners();
profilePopup.setEventListeners();
