//переменные для кнопки закрытия
const closeButtons = document.querySelectorAll('.popup__close');
//const popup = document.querySelectorAll('.popup');
const popupList = document.querySelectorAll('.popup')
//переменные для попапа формы редактирования
const profileEditButton = document.querySelector('.profile__edit');
const profilePopup = document.querySelector('.popup_type_profile');
const profileForm = document.querySelector('.popup__form-container');
const nameInput = document.querySelector('.popup__form-item_el_name');
const jobInput = document.querySelector('.popup__form-item_el_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__text');
//переменные для попапа формы добавления карточек
const addButton = document.querySelector('.profile__add');
const cardPopup = document.querySelector('.popup_type_card');
const cardForm = cardPopup.querySelector('.popup__form-container');
const placeInput = document.querySelector('.popup__form-item_el_place');
const linkInput = document.querySelector('.popup__form-item_el_link');
//переменные для попапа карточек
const imagePopup = document.querySelector('.popup_type_image');
const images = document.querySelector('.popup__image');
const imagesCaption = document.querySelector('.popup__image-title');
//переменные для создания карточек
const cardsContainer = document.querySelector('.cards');
const cardsTemplate = document.querySelector('#cards-template').content;

//функция открытия попапа
function openPopup(popup) {
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
  toggleButton(profileForm, formValidationConfig);
};
//открытие формы добавления карточки
const handleAddButtonClick = () => {
  openPopup(cardPopup);
  toggleButton(cardForm, formValidationConfig);
};
//сoхранение данных в форме редактирования профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopup);
}
//функция создания карточек
function createCard(item) {
  const cardElement = cardsTemplate.querySelector('.card').cloneNode(true);
  const cardName = cardElement.querySelector('.card__name');
  const cardImage = cardElement.querySelector('.card__image');
  cardName.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;
  //кнопка лайк
function handleLikeCardClick (evt) {
  evt.target.classList.toggle('card__like_active');
};
cardElement
  .querySelector('.card__like')
  .addEventListener('click', handleLikeCardClick);
//удаление карточки
function handleDeleteCardClick () {
  cardElement.remove();
}
cardElement
  .querySelector('.card__delete')
  .addEventListener('click', handleDeleteCardClick);
//открытие попапа с картинкой
function handleOpenCardImage() {
  images.src = item.link;
  images.alt = item.name;
  imagesCaption.textContent = item.name;
  openPopup(imagePopup);
};
cardImage.addEventListener('click', handleOpenCardImage);
  return cardElement;
}
//функция добавления карточек
function addCard(el) {
  const cardsElement = createCard(el);
  cardsContainer.prepend(cardsElement);
}
//метод выведения карточек 'из коробки' при открытии страницы
initialCards.forEach((element) => {
  addCard(element);
});
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


