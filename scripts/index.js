//переменные для кнопки закрытия
const closeButtons = document.querySelectorAll('.popup__close');
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
const cardsTemplate = document.querySelector('#cards-template').content

//функция открытия закрытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));//уствнвыливаем обработчик закрытия на крестик
});
//открытие формы редактирования профиля
const handleEditButtonClick = () => {
  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};
//открытие формы добавления карточки
const handleAddButtonClick = () => {
  openPopup(cardPopup);
};
//сoхранение данных в форме редактирования профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopup);
}
//шесть карточек 'из коробки'
const initialCards = [
  {
    name: 'Будапешт',
    link: 'https://images.unsplash.com/photo-1674669816655-304cb1588eed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=945&q=80',
  },
  {
    name: 'Венеция',
    link: 'https://images.unsplash.com/photo-1671364546528-dea96bc65f1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1067&q=80',
  },
  {
    name: 'Гренландия',
    link: 'https://images.unsplash.com/photo-1654949770651-8580733aacbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Куала-Лумпур',
    link: 'https://images.unsplash.com/photo-1675416833313-44fc7879987a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Исландия',
    link: 'https://images.unsplash.com/photo-1675112519495-6d257843203d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
];

//функция создания карточек
function createCard(item) {
  const cardElement = cardsTemplate.querySelector('.card').cloneNode(true);
  const cardName = cardElement.querySelector('.card__name');
  const cardImage = cardElement.querySelector('.card__image');
  cardName.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;

  //кнопка лайк
  cardElement
    .querySelector('.card__like')
    .addEventListener('click', function (evt) {
      evt.target.classList.toggle('card__like_active');
    });

  //удаление карточки
  cardElement
    .querySelector('.card__delete')
    .addEventListener('click', function () {
      cardElement.remove();
    });

  //открытие попапа с картинкой
  cardImage.addEventListener('click', function () {
    images.src = item.link;
    images.alt = item.name;
    imagesCaption.textContent = item.name;
    openPopup(imagePopup);
  });
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
