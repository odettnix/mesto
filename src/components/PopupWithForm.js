import Popup from './Popup.js';
import {
    inputName,
    inputText,
    inputLocation,
    inputUrl,
} from '../utils/Constants.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formSelector, submitFunction) {
        super(popupSelector);
        this._formSelector = formSelector;
        this._submitFunction = submitFunction;
    }

    close() {
        super.close();
        this._formSelector.reset();
    }

    _getInputValues() {
        return {
            name: inputName.value,
            job: inputText.value,
            place: inputLocation.value,
            url: inputUrl.value
        }
    }

    setEventListeners() {
        super.setEventListeners();
        this._formSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitFunction(this._getInputValues());
        });
    }
}