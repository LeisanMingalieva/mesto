//переменные для попапа формы редактирования
const editButton = document.querySelector('.profile__edit')
const popup = document.querySelector('.popup')
const closeButton = popup.querySelector('.popup__close')
let formElement = document.querySelector('.popup__form-container');
let nameInput = document.querySelector('.popup__form-item_el_name');
let jobInput = document.querySelector('.popup__form-item_el_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__text');
//переменные для попапа формы добавления карточек
const addButton = document.querySelector('.profile__add');
const popupCard = document.querySelector('.popup_type_card');
const closeButtonCard = popupCard.querySelector('.popup__close');
let cardElement = popupCard.querySelector('.popup__form-container');
let placeInput = document.querySelector('.popup__form-item_el_place');
let linkInput = document.querySelector('.popup__form-item_el_link');
//переменные для попапа карточек
const popupImage = document.querySelector('.popup_type_image');
const images = document.querySelector('.popup__image');
const imagesCaption = document.querySelector('.popup__image-title');
const closeButtonImage = popupImage.querySelector('.popup__close');

//функция открытия закрытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//открытие формы редактирования профиля
const handleEditButtonClick = () => {
  openPopup(popup);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}   
//закрытие формы редактирования профиля
const handleCloseButtonClick = () => {
  closePopup(popup);
}
//открытие формы добавления карточки
const handleAddButtonClick = () => {
  openPopup(popupCard);
} 
//закрытие формы добавления карточки
const handleCloseButtonCardClick = () => {
  closePopup(popupCard);
}
//закрытие попапа с картинкой
const handleCloseButtonImageClick = () => {
  closePopup(popupImage);
}

//сoхранение данных в форме редактирования профиля
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;   
    closePopup(popup);
}


//шесть карточек 'из коробки'
const initialCards = [
    {
      name: 'Будапешт',
      link: 'https://images.unsplash.com/photo-1674669816655-304cb1588eed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=945&q=80'
    },
    {
      name: 'Венеция',
      link: 'https://images.unsplash.com/photo-1671364546528-dea96bc65f1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1067&q=80'
    },
    {
      name: 'Гренландия',
      link: 'https://images.unsplash.com/photo-1654949770651-8580733aacbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Куала-Лумпур',
      link: 'https://images.unsplash.com/photo-1675416833313-44fc7879987a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Исландия',
      link: 'https://images.unsplash.com/photo-1675112519495-6d257843203d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
  ]; 
  
    //функция добавления карточек               
  function addCard(cardName, cardLink) {
    const cardsContainer = document.querySelector('.cards');
    const cardsTemplate = document.querySelector('#cards-template').content;
    const cardsElement = cardsTemplate.querySelector('.card').cloneNode(true);
    cardsElement.querySelector('.card__image').src = cardLink;
    cardsElement.querySelector('.card__name').textContent = cardName;

    //кнопка лайк
    cardsElement.querySelector('.card__like').addEventListener('click', 
    function(evt) {
       evt.target.classList.toggle('card__like_active')       
    });

    //удаление карточки
    cardsElement.querySelector('.card__delete').addEventListener('click', function() {
      cardsElement.remove();
     });
     
     //открытие попапа с картинкой
     cardsElement.querySelector('.card__image').addEventListener('click', function() {
      images.src = cardLink;
      imagesCaption.textContent = cardName;
      openPopup(popupImage);
     })
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

formElement.addEventListener('submit', handleFormSubmit)
cardElement.addEventListener('submit', handleCardSubmit)
editButton.addEventListener('click', handleEditButtonClick)
closeButton.addEventListener('click', handleCloseButtonClick)
addButton.addEventListener('click', handleAddButtonClick)
closeButtonCard.addEventListener('click', handleCloseButtonCardClick)
closeButtonImage.addEventListener('click', handleCloseButtonImageClick)











