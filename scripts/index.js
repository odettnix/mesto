const popupClose = document.querySelector('#popup__close');
const popupCloseAdd = document.querySelector('#popup__close-add');
const popupCloseImage = document.querySelector('#popup__close-image');

const popups = document.querySelectorAll('.popup');

const profilePopup = document.querySelector('#popup__profile');
const popupOpen = document.querySelector('#profile__edit-button');
const popupName = document.querySelector('#profile__name');
const popupText = document.querySelector('#profile__text');
const inputName = document.querySelector('.popup__input_value-name');
const inputText = document.querySelector('.popup__input_value-text');
const formElementProfile = document.querySelector('#popup__form-profile');
const buttonSubmitProfile = formElementProfile.querySelector('.popup__save');

const formElementAdd = document.querySelector('#popup__form-add');
const buttonSubmitAdd = formElementAdd.querySelector('.popup__save');
const popupAdd = document.querySelector('#popup__add');
const popupAddButton = document.querySelector('#profile__add-button');
const inputUrl = document.querySelector('.popup__input_value-url');
const inputLocation = document.querySelector('.popup__input_value-location');

const cardsTemplate = document.querySelector('#template').content;
const cardsList = document.querySelector('.elements__gallery');

const popupImageSee = document.querySelector('#popup__image');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = popupImageSee.querySelector('.popup__image-caption');

const cardImage = document.querySelector('.elements__image');
const cardTitle = document.querySelector('.elements__title');

const errorMessage = document.querySelectorAll('.popup__input-error');






const initialCards = [
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






function openPopup(modal) {
  modal.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(modal) {
  modal.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key == 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

popups.forEach(popup => {
  popup.addEventListener('mousedown', evt => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  });
});

function openPopupProfile() {
  openPopup(profilePopup);
  inputName.value = popupName.textContent;
  inputText.value = popupText.textContent;
  enableSubmitButtton(buttonSubmitProfile);
  disableErrorMessages();

}

function handleProfileFormSubmit(evt) {

  evt.preventDefault();
  popupName.textContent = inputName.value;
  popupText.textContent = inputText.value;
  closePopup(profilePopup);
}

popupOpen.addEventListener('click', openPopupProfile);
formElementProfile.addEventListener('submit', handleProfileFormSubmit);



function openAddPopup() {
  openPopup(popupAdd);
  formElementAdd.reset();
  disableSubmitButtton(buttonSubmitAdd);
  disableErrorMessages();
}

function submitAddForm(evt) {
  evt.preventDefault();
  renderCard(inputLocation.value, inputUrl.value);

  inputLocation.value = '';
  inputUrl.value = '';

  closePopup(popupAdd);
}

popupAddButton.addEventListener('click', openAddPopup);
formElementAdd.addEventListener('submit', submitAddForm);


////
function openImage(image, caption) {
  popupImage.src = image;
  popupImage.alt = `?????????????????????? ${caption}`;
  popupImageCaption.textContent = caption;
  openPopup(popupImageSee);
}


////





///


function addCard(name, link) {
  const cardElement = cardsTemplate.querySelector('.element').cloneNode(true);
  const cardElementImage = cardElement.querySelector('.elements__image');
  const removeCardButton = cardElement.querySelector('.elements__button-remove');
  const likeCardButton = cardElement.querySelector('.elements__like');

  cardElementImage.src = link;
  cardElementImage.alt = `?????????????????????? ${name}`;
  cardElement.querySelector('.elements__title').textContent = name;

  cardElementImage.addEventListener('click', () => openImage(link, name));
  likeCardButton.addEventListener('click', () => likeCardButton.classList.toggle('elements__like_active'));
  removeCardButton.addEventListener('click', () => cardElement.remove());

  return cardElement;

}

function renderCard(name, link) {
  const cardElement = addCard(name, link);
  cardsList.prepend(cardElement);
}

popupCloseImage.addEventListener('click', () => closePopup(popupImageSee));

initialCards.forEach((item) => renderCard(item.name, item.link));



