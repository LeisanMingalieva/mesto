import './index.css';
import Card from "../components/Card.js";
import { initialCards, formValidationConfig } from "../utils/constans.js";
import { 
  profileEditButton,
  nameInput,
  jobInput,
  profileForm,
  addButton,
  cardForm,
  avatarEdit,
  avatarForm,
  apiConfig
} from '../utils/constans.js'
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithConfirm from '../components/PopupWithConfirm';
import Api from '../components/Api.js';

//экземпляры классов
const api = new Api(apiConfig)
const imagePopup = new PopupWithImage('.popup_type_image');
const userInfo = new UserInfo( {userNameSelector:'.profile__name', userJobSelector:'.profile__text', avatarSelector: '.profile__avatar'} )
const profilePopup = new PopupWithForm('.popup_type_profile', {handleSubmitForm: (inputData) => {
  api.setUserData(inputData).then((data) => {
    userInfo.setUserInfo(data);
  validators[profileForm.getAttribute('name')].toggleButton();
  })
}});
const cardPopup = new PopupWithForm('.popup_type_card', {handleSubmitForm: (cardData) => {
renderCard(cardData);
}});
const avatarPopup = new PopupWithForm('.popup_type_avatar', {handleSubmitForm: (avatarInput) => {
  api.setUserAvatar(avatarInput).then((data) => {
    userInfo.setUserAvatar(data.avatar);
  }) 
  validators[avatarForm.getAttribute('name')].toggleButton();
}
})
//const confirmPopup = new PopupWithConfirm('.popup_type_confirm')

//открытие формы редактирования профиля
const handleEditButtonClick = () => {
  profilePopup.open();
  const userData = userInfo.getUserInfo()
  nameInput.value = userData.name,
  jobInput.value = userData.about
  validators[profileForm.getAttribute('name')].toggleButton();
};

//открытие формы добавления карточки
const handleAddButtonClick = () => {
  cardPopup.open();
  validators[cardForm.getAttribute('name')].toggleButton();
};

//открытие попапа смены аватара
const handleAvatarEditClick = () => {
  avatarPopup.open();
  validators[avatarForm.getAttribute('name')].toggleButton();
}

//создание новой карточки
// const createCard = (data, templateSelector, func) => {
//   const newCard =  new Card(data, templateSelector, func);
//     return newCard.generatedCard();
// }
const createCard = (data) => {
  const id = data.id;
  const newCard =  new Card(data, '#cards-template', handleCardClick);
    return newCard.generatedCard();
}

//функция увеличения изображения по клику на него
const handleCardClick = (title,link) => {
  imagePopup.open(title, link);
}

//отрисовка карточек
const renderCard = (item) => {
  const card = createCard(item, '#cards-template', handleCardClick);
  cardList.addItem(card);
}
//отрисовка карточек "из коробки"
// const cardList = new Section ( {
//   items:initialCards,
//   renderer: renderCard,
// }, 
//   '.cards');
// cardList.renderItems();
const cardList = new Section ( {
  renderer: (item) => {
    cardList.addItem(createCard(item))
  },
}, '.cards');

api.getUserData()
  .then((result) => {
    userInfo.setUserInfo(result)
  }
  )

api.getInitialCards()
.then((result) => {
  cardList.createCards(result)
})

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
avatarEdit.addEventListener('click', handleAvatarEditClick);

//слушатели для попапов
imagePopup.setEventListeners();
cardPopup.setEventListeners();
profilePopup.setEventListeners();
avatarPopup.setEventListeners();
//confirmPopup.setEventListeners();