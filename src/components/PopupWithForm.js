import Popup from "./Popup.js";

export default class PopupWithForm extends Popup { 
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._formInputs = Array.from(this._popup.querySelectorAll(".popup__input"));
    this._formSelector = this._popup.querySelector(".popup__form");
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
    this._formSelector.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._formSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitFunction(this._getInputValues());
    });
  }
}