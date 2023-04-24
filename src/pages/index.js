import './index.css';
import Card from "../components/Card.js";
import {
  formValidationConfig,
  profileEditButton,
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
const api = new Api(apiConfig);
const imagePopup = new PopupWithImage('.popup_type_image');
const user = new UserInfo( {userNameSelector:'.profile__name', userJobSelector:'.profile__text', avatarSelector: '.profile__avatar'} )
//экземпляр формы редактирования профиля
const profilePopup = new PopupWithForm('.popup_type_profile', {handleSubmitForm: (inputData) => {
  profilePopup.renderLoading(true);
  api.setUserData(inputData)
    .then((res) => {
      user.setUserInfo(res);
      profilePopup.close()
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      profilePopup.renderLoading(false)
    })
  }
});
//экземпляр формы добавления карточки
const cardPopup = new PopupWithForm('.popup_type_card', {handleSubmitForm: (cardInput) => {
  cardPopup.renderLoading(true,);
  api.postNewCard(cardInput)
  .then((res) => {
    cardList.addItem(createCard(res));
    cardPopup.close()
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    cardPopup.renderLoading(false)
  })
  }
});
//экземпляр формы смены аватара
const avatarPopup = new PopupWithForm('.popup_type_avatar', {handleSubmitForm: (avatarInput) => {
  avatarPopup.renderLoading(true);
  api.setUserAvatar(avatarInput)
    .then((res) => {
      user.setUserInfo(res);
      avatarPopup.close()
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      avatarPopup.renderLoading(false);
    })
  }
})
//экземпляр формы согласия на удаление карточки
const deleteConfirmPopup = new PopupWithConfirm('.popup_type_confirm',  {handleSubmitForm: (cardId, card) => {
  api.deleteCard(cardId)
  .then(() => {
    card.deleteCard()
    deleteConfirmPopup.close()
  })
  .catch((err) => {
    console.log(err);
  })
}})

Promise.all([api.getUserData(), api.getInitialCards()])
.then(([userData, cards]) => {
  user.setUserInfo(userData)
  cardList.renderItems(cards)
}).catch((err) => {
  console.log(err)
})

//открытие попапа удаления карточки
const handleOpenDeletePopup = (cardId, card) => {
  deleteConfirmPopup.open(cardId, card);
}
//открытие формы редактирования профиля
const handleEditButtonClick = () => {
  profilePopup.open();
  const userInfo = user.getUserInfo()
  profilePopup.setInputValues(userInfo)
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

//функция создания новой карточки
const createCard = (data) => {
  const card =  new Card(data, user._userId, '#cards-template', handleCardClick, handleCardLike, handleOpenDeletePopup);
    return card.generatedCard();
}

//функция увеличения изображения по клику на него
const handleCardClick = (title,link) => {
  imagePopup.open(title, link);
}
//функция лайка/дизлайка карточки 
const handleCardLike = (cardId, isliked, card) => {
  if(isliked) {
    api.dislikeCard(cardId)
      .then(res => card.handleLikeCardClick(res))
      .catch((err) => {
        console.log(err);
      })
  } else {
    api.likeCard(cardId)
      .then(res => {card.handleLikeCardClick(res)})
      .catch((err) => {
        console.log(err);
      })
  }
}

const cardList = new Section ( {
  renderer: (cardItem) => {
    cardList.addItem(createCard(cardItem))
  },
}, 
'.cards'
);

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
deleteConfirmPopup.setEventListeners();