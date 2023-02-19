import './index.css';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';

import {
  profilePopup,
  popupOpen,
  popupName,
  popupText,
  popupAdd,
  popupAddButton,
  cardsList,
  popupImageSee,
  initialCards,
  settingsList,
  inputName,
  inputText,
} from '../utils/Constants.js';



//вывод карточек
const popupWithCard = new PopupWithImage(popupImageSee);


function createCard(item) {
  const cardElement = new Card(item, '#template', popupWithCard).generateCard();
  return cardElement;
}

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  },
  cardsList);

cardList.renderItems(initialCards);

popupWithCard.setEventListeners();



//Попап изменения профиля
const profileEditor = new PopupWithForm(profilePopup, submitEditForm);

const userInfo = new UserInfo({
  name: popupName,
  job: popupText,
});

popupOpen.addEventListener('click', () => {
  profileEditor.open();
  const userInfoCurrent = userInfo.getUserInfo();
  inputName.value = userInfoCurrent.name,
  inputText.value = userInfoCurrent.job,
  editProfileFormValid.resetValidation();
});

function submitEditForm(data) {
  userInfo.setUserInfo(data.popup__name, data.popup__text);
  profileEditor.close();
}

profileEditor.setEventListeners();

//Попап добавления карточки

const cardAdd = new PopupWithForm(popupAdd, submitProfileForm);

popupAddButton.addEventListener('click', () => {
  cardAdd.open();
  addCardFormValid.resetValidation();
});

function submitProfileForm(data) {
  const formValue = {
    name: data.popup__name,
    link: data.popup__text,
  };
  cardList.addItem(createCard(formValue));
  cardAdd.close();
}

cardAdd.setEventListeners();



//Валидация
const editProfileFormValid = new FormValidator(settingsList, profilePopup);
const addCardFormValid = new FormValidator(settingsList, popupAdd);

editProfileFormValid.enableValidation();
addCardFormValid.enableValidation();










