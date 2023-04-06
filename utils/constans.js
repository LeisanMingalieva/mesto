//шесть карточек 'из коробки'
export const initialCards = [
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
    }
];
//переменные для кнопки закрытия
const closeButtons = document.querySelectorAll('.popup__close');
export const popupList = document.querySelectorAll('.popup')
//переменные для попапа формы редактирования
export const profileEditButton = document.querySelector('.profile__edit');
export const profilePopup = document.querySelector('.popup_type_profile');
export const profileForm = document.querySelector('.popup__form-container');
export const nameInput = document.querySelector('.popup__form-item_el_name');
export const jobInput = document.querySelector('.popup__form-item_el_job');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__text');
//переменные для попапа формы добавления карточек
export const addButton = document.querySelector('.profile__add');
export const cardPopup = document.querySelector('.popup_type_card');
export const cardForm = cardPopup.querySelector('.popup__form-container');
export const placeInput = document.querySelector('.popup__form-item_el_place');
export const linkInput = document.querySelector('.popup__form-item_el_link');
//переменные для попапа карточек
export const imagePopup = document.querySelector('.popup_type_image');
export const images = document.querySelector('.popup__image');
export const imagesCaption = document.querySelector('.popup__image-title');
//переменные для создания карточек
export const cardsContainer = document.querySelector('.cards');
const cardsTemplate = document.querySelector('#cards-template').content;

export const formValidationConfig = {
  formSelector: '.popup__form-container',
  inputSelector: '.popup__form-item',
  errorClass: 'popup__form-item_type_error',
  buttonSelector: '.popup__form-save',
  buttonDisabledClass: 'popup__form-save_disabled',
  errorSelector: '.popup__form-item-error',
};
  