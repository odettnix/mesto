export const popupCloseImage = document.querySelector('#popup__close-image');

export const popups = document.querySelectorAll('.popup');

export const profilePopup = document.querySelector('#popup__profile');
export const popupOpen = document.querySelector('#profile__edit-button');
export const popupName = document.querySelector('#profile__name');
export const popupText = document.querySelector('#profile__text');
export const inputName = document.querySelector('.popup__input_value-name');
export const inputText = document.querySelector('.popup__input_value-text');
export const formElementProfile = document.querySelector('#popup__form-profile');


export const formElementAdd = document.querySelector('#popup__form-add');

export const popupAdd = document.querySelector('#popup__add');
export const popupAddButton = document.querySelector('#profile__add-button');
export const inputUrl = document.querySelector('.popup__input_value-url');
export const inputLocation = document.querySelector('.popup__input_value-location');


export const cardsList = document.querySelector('.elements__gallery');

export const popupImageSee = document.querySelector('#popup__image');
export const popupImage = document.querySelector('.popup__image');
export const popupImageCaption = popupImageSee.querySelector('.popup__image-caption');



export const initialCards = [
  {
    name: 'Ceramic wall',
    link: 'https://images.unsplash.com/photo-1665510431494-5c8c4e5daa96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80'
  },
  {
    name: 'Gate, Jaipur, India',
    link: 'https://images.unsplash.com/photo-1588673133509-13d815c64b5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
  },
  {
    name: 'Taj Mahal, India',
    link: 'https://images.unsplash.com/photo-1523980077198-60824a7b2148?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'Ornate doorway, Indian architecture, Jaipur',
    link: 'https://images.unsplash.com/photo-1524228529766-4d7fe5dc55ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=429&q=80'
  },
  {
    name: 'Flowers on a wall',
    link: 'https://images.unsplash.com/photo-1458322493962-69c5a4ef7ddf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Islamic Architecture Tiles',
    link: 'https://images.unsplash.com/photo-1519122114654-d665e49b122e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
  }
];


export const settingsList = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_error',
  };