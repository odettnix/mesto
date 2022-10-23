function hideInputError(formElement, inputElement, settings) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = "";
    inputElement.classList.remove(settings.inputErrorClass);
}

function showInputError(formElement, inputElement, errorMessage, settings) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(settings.inputErrorClass);
}

function disableErrorMessages() {
    errorMessage.forEach(validMessage => {
        validMessage.textContent = ""
    });
}


function checkInputValidity(formElement, inputElement, settings) {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, settings);
    } else {
        hideInputError(formElement, inputElement, settings);
    }
}

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

function enableSubmitButtton(buttonElement) {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove('popup__save_disabled');
  }
  
  function disableSubmitButtton(buttonElement) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add('popup__save_disabled');
  }

function toggleButtonState(inputList, buttonElement, settings) {
    if (hasInvalidInput(inputList)) {
        disableSubmitButtton(buttonElement);
    } else {
        enableSubmitButtton(buttonElement);
    }
}

function setEventListeners(formElement, settings) {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, settings);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, settings);
            toggleButtonState(inputList, buttonElement, settings);
        });
    });
}

function enableValidation(settings) {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', evt => {
            evt.preventDefault();
        });
        setEventListeners(formElement, settings);
    });
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_error',
})
