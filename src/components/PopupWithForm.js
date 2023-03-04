import Popup from "./Popup.js";

export default class PopupWithForm extends Popup { 
  constructor({popupSelector}, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._formInputs = Array.from(this._popupSelector.querySelectorAll(".popup__input"));
    this._popupForm = this._popupSelector.querySelector(".popup__form");
  }

  _getInputValues() {
    this._formInputValues = {};
    this._formInputs.forEach((input) => {
      this._formInputValues[input.name] = input.value;
    });
    return this._formInputValues;
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitFunction(this._getInputValues());
    });
  }

  renderLoading(isLoading, submitType) {
    if (isLoading) {
      this._popupSelector.querySelector('.popup__save').textContent = 'Сохранение...';
    } else {
      this._popupSelector.querySelector('.popup__save').textContent = submitType;
    }
  }
}