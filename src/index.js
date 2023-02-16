import './pages/index.css';

import { Card } from './components/Card.js';
import { FormValidator } from './components/FormValidator.js';
import Section from './components/Section.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import PopupWithImage from './components/PopupWithImage.js';

import {
  profilePopup,
  popupOpen,
  popupName,
  popupText,
  formElementProfile,
  formElementAdd,
  popupAdd,
  popupAddButton,
  cardsList,
  popupImageSee,
  initialCards,
  settingsList,
  inputName,
  inputText,
} from './utils/Constants.js';


//вывод карточек
const popupWithCard = new PopupWithImage(popupImageSee);

const card = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = new Card(item, '#template', popupWithCard).generateCard();
    card.addItem(cardElement);
  }
}, cardsList);

card.renderItems(initialCards);

popupWithCard.setEventListeners();

//Попап изменения профиля
const profileEditor = new PopupWithForm(profilePopup, formElementProfile, submitEditForm);
const userInfo = new UserInfo({
  name: popupName,
  job: popupText
});

popupOpen.addEventListener('click', () => {
  profileEditor.open();
  const userInfoCurrent = userInfo.getUserInfo();
  inputName.value = userInfoCurrent.name,
  inputText.value = userInfoCurrent.job,
  editProfileFormValid.resetValidation();
});

function submitEditForm(data) {
  userInfo.setUserInfo(data);
  profileEditor.close();
}

profileEditor.setEventListeners();

//Попап добавления карточки
const cardAdd = new PopupWithForm(popupAdd, formElementAdd, submitAddForm);

function submitAddForm(data) {
  const cardData = [{
    name: data.place,
    link: data.url
  }];
  card.renderItems(cardData);
  cardAdd.close();
}

popupAddButton.addEventListener('click', () => {
  cardAdd.open();
  addCardFormValid.resetValidation();
});

cardAdd.setEventListeners();

//Валидация
const editProfileFormValid = new FormValidator(settingsList, profilePopup);
const addCardFormValid = new FormValidator(settingsList, popupAdd);

editProfileFormValid.enableValidation();
addCardFormValid.enableValidation();










