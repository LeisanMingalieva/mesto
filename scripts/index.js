//переменные для попапа формы редактирования
const profileEditButton = document.querySelector(".profile__edit");
const profilePopup = document.querySelector(".popup_type_profile");
const profileCloseButton = profilePopup.querySelector(".popup__close");
const profileForm = document.querySelector(".popup__form-container");
const nameInput = document.querySelector(".popup__form-item_el_name");
const jobInput = document.querySelector(".popup__form-item_el_job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__text");
//переменные для попапа формы добавления карточек
const addButton = document.querySelector(".profile__add");
const cardPopup = document.querySelector(".popup_type_card");
const cardCloseButton = cardPopup.querySelector(".popup__close");
const cardsContainer = document.querySelector(".cards");
const cardForm = cardPopup.querySelector(".popup__form-container");
const placeInput = document.querySelector(".popup__form-item_el_place");
const linkInput = document.querySelector(".popup__form-item_el_link");
//переменные для попапа карточек
const imagePopup = document.querySelector(".popup_type_image");
const images = document.querySelector(".popup__image");
const imagesCaption = document.querySelector(".popup__image-title");
const imageCloseButton = imagePopup.querySelector(".popup__close");

// const closeButtons = document.querySelectorAll('.popup__close');

// closeButtons.forEach((button) => {
//   const popup = button.closest('.popup');
//   button.addEventListener('click', () => closePopup(popup));
// });

//функция открытия закрытия попапа
function openPopup(profilePopup) {
  profilePopup.classList.add("popup_opened");
}
function closePopup(profilePopup) {
  profilePopup.classList.remove("popup_opened");
}

//открытие формы редактирования профиля
const handleEditButtonClick = () => {
  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};
//закрытие формы редактирования профиля
const handleCloseButtonClick = () => {
  closePopup(profilePopup);
};
//открытие формы добавления карточки
const handleAddButtonClick = () => {
  openPopup(cardPopup);
};
//закрытие формы добавления карточки
const handleCloseButtonCardClick = () => {
  closePopup(cardPopup);
};
//закрытие попапа с картинкой
const handleCloseButtonImageClick = () => {
  closePopup(imagePopup);
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
    name: "Будапешт",
    link: "https://images.unsplash.com/photo-1674669816655-304cb1588eed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=945&q=80",
  },
  {
    name: "Венеция",
    link: "https://images.unsplash.com/photo-1671364546528-dea96bc65f1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1067&q=80",
  },
  {
    name: "Гренландия",
    link: "https://images.unsplash.com/photo-1654949770651-8580733aacbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Куала-Лумпур",
    link: "https://images.unsplash.com/photo-1675416833313-44fc7879987a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Исландия",
    link: "https://images.unsplash.com/photo-1675112519495-6d257843203d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

//функция добавления карточек
function addCard(cardName, cardLink) {
  const cardsTemplate = document.querySelector("#cards-template").content;
  const cardsElement = cardsTemplate.querySelector(".card").cloneNode(true);
  cardsElement.querySelector(".card__image").src = cardLink;
  cardsElement.querySelector(".card__name").textContent = cardName;
  cardsElement.querySelector(".card__image").alt = cardName;

  //кнопка лайк
  cardsElement
    .querySelector(".card__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__like_active");
    });

  //удаление карточки
  cardsElement
    .querySelector(".card__delete")
    .addEventListener("click", function () {
      cardsElement.remove();
    });

  //открытие попапа с картинкой
  cardsElement
    .querySelector(".card__image")
    .addEventListener("click", function () {
      images.src = cardLink;
      images.alt = cardName;
      imagesCaption.textContent = cardName;
      openPopup(imagePopup);
    });
  cardsContainer.prepend(cardsElement);
}

//метод выведения карточек 'из коробки' при открытии страницы
initialCards.forEach((element) => {
  addCard(element.name, element.link);
});

//добавление новой карточки при нажатии кнопку добавления
function handleCardSubmit (evt) {
  evt.preventDefault();
  initialCards.unshift(
    {
    name: placeInput.value,
    link: linkInput.value
  });
  addCard(initialCards[0].name, initialCards[0].link);
  
  closePopup(popupCard);

  placeInput.value = ''; //после закрытия формы данные в инпутах не сохраняются
  linkInput.value = '';
}


profileForm.addEventListener("submit", handleProfileFormSubmit);
cardForm.addEventListener("submit", handleCardSubmit);
profileEditButton.addEventListener("click", handleEditButtonClick);
profileCloseButton.addEventListener("click", handleCloseButtonClick);
addButton.addEventListener("click", handleAddButtonClick);
cardCloseButton.addEventListener("click", handleCloseButtonCardClick);
imageCloseButton.addEventListener("click", handleCloseButtonImageClick);
