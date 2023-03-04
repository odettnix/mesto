import './index.css';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirm from '../components/PopupWithConfirm';
import Api from '../components/Api';

import {
  profilePopup,
  popupOpen,
  popupAdd,
  popupAddButton,
  settingsList,
  inputName,
  inputText,
  popupAvatar,
  popupAvatarButton,
} from '../utils/Constants.js';


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-60',
  headers: {
    authorization: '990eb1b4-940b-4d98-be8e-e780cfa06b2c',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo({
  name: '#profile__name',
  about: '#profile__text',
  avatar: '#profile__avatar'
});


let userId = '';
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, cards]) => {
    userId = user._id;
    userInfo.setUserInfo(user.name, user.about);
    userInfo.setUserAvatar(user.avatar);
    cardList.renderItems(cards);
  })
  .catch(err => {
    console.log(err);
  });



/////карточки
const popupWithCard = new PopupWithImage('#popup__image');
const cardAdd = new PopupWithForm({ popupSelector: '#popup__add' }, submitCardForm);
const cardRemover = new PopupWithConfirm('#popup__confirm');

cardAdd.setEventListeners();
popupWithCard.setEventListeners();
cardRemover.setEventListeners();

const cardList = new Section({
  renderer: (item) => {
    return createCard(item);
  }
}, '.elements__gallery');

function createCard(data) {
  const cardElement = new Card({
    data,
    userId: userId,
    handleDeleteClick: (id, handleConfirmDelete) => {
      cardRemover.open(id, handleConfirmDelete);
    },
    handleConfirmDelete: (id) => {
      cardRemover.renderLoading(true)
      api.deleteCard(id)
        .then(() => {
          cardElement.remove();
          cardRemover.close();
        })
        .catch((error) => {
          console.log(`Ошибка при удалении карточки: ${error}`);
        })
        .finally(() => {
          cardRemover.renderLoading(false, 'Да');
        })
    },
    handleLikeClick: (id, owner) => {
      if (cardElement.isLiked()) {
        api.dislikeCard(id, owner)
          .then((cardData) => {
            cardElement.refreshLikes(cardData.likes);
            cardElement.setLikeStatus(cardData.likes.length);
          })
          .catch((error) => {
            console.log(`Ошибка при удалении лайка: ${error}`);
          })
      } else {
        api.likeCard(id, owner)
          .then((cardData) => {
            cardElement.refreshLikes(cardData.likes);
            cardElement.setLikeStatus(cardData.likes.length);
          })
          .catch((error) => {
            console.log(`Ошибка при постановке лайка: ${error}`);
          })
      }
    },
    handleCardClick: popupWithCard,
  },
    '#template',
  );

  const card = cardElement.generateCard()
  return card;
}

function submitCardForm(data) {
  cardAdd.renderLoading(true);
  const formValue = {
    name: data.popup__name,
    link: data.popup__text,
  };
  api.createCard(formValue)
    .then((formValue) => {
      const cardElement = createCard(formValue);
      cardList.addItem(cardElement);
      cardAdd.close();
    })
    .catch((error) => {
      console.log(`Ошибка при создании новой карточки: ${error}`);
    })
    .finally(() => {
      cardAdd.renderLoading(false, 'Создать');
    })
}


popupAddButton.addEventListener('click', () => {
  cardAdd.open();
  addCardFormValid.resetValidation();
});

////Профиль
const profileEditor = new PopupWithForm({ popupSelector: '#popup__profile' }, submitEditForm);

profileEditor.setEventListeners();

function submitEditForm(data) {
  profileEditor.renderLoading(true)
  api.saveNewUserInfo(data.popup__name, data.popup__text)
    .then((user) => {
      userInfo.setUserInfo(user.name, user.about);
      profileEditor.close()
    })

    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      profileEditor.renderLoading(false, 'Сохранить')
    });
}

popupOpen.addEventListener('click', () => {
  profileEditor.open();
  const userInfoCurrent = userInfo.getUserInfo();
  inputName.value = userInfoCurrent.name,
    inputText.value = userInfoCurrent.about
  editProfileFormValid.resetValidation();
});


////Аватар
const avatarEditor = new PopupWithForm({ popupSelector: '#popup__avatar' }, submitAvatarForm);

avatarEditor.setEventListeners();

function submitAvatarForm(data) {
  avatarEditor.renderLoading(true)
  api.saveNewUserAvatar(data.popup__avatar)
    .then((user) => {
      userInfo.setUserAvatar(user.avatar);
      avatarEditor.close()
    })

    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarEditor.renderLoading(false, 'Сохранить')
    });
}

popupAvatarButton.addEventListener('click', () => {
  avatarEditor.open();
  addAvatarFormValid.resetValidation();
});


//Валидация
const editProfileFormValid = new FormValidator(settingsList, profilePopup);
const addCardFormValid = new FormValidator(settingsList, popupAdd);
const addAvatarFormValid = new FormValidator(settingsList, popupAvatar);

editProfileFormValid.enableValidation();
addCardFormValid.enableValidation();
addAvatarFormValid.enableValidation();






