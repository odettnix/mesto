let popupClose = document.querySelector('#popup__close');
let popup = document.querySelector('#popup');
let popupOpen = document.querySelector('#profile__edit-button');
let popupName = document.querySelector('#profile__name');
let popupText = document.querySelector('#profile__text');
let inputName = document.querySelector('#popup_input-Name');
let inputText = document.querySelector('#popup_input-Text');
let formElement = document.querySelector('#popup__form');


function PopupOpenButton (){
    popup.classList.add('popup_opened');
    inputName.value = popupName.textContent;
    inputText.value = popupText.textContent;
    
}

function PopupCloseButton(){
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt){

    evt.preventDefault();
    popupName.textContent = inputName.value;
    popupText.textContent = inputText.value;
    popup.classList.remove('popup_opened');
}


popupOpen.addEventListener('click', PopupOpenButton);
popupClose.addEventListener('click', PopupCloseButton);
formElement.addEventListener('submit', formSubmitHandler);