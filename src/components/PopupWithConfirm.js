import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._submitForm = this._popupSelector.querySelector('#delete-card');
  }

  open(id, handleConfirmDelete) {
    super.open();
    this._id = id;
    this._handleConfirmDelete = handleConfirmDelete;
  }

  close() {
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmDelete = (evt) => {
      evt.preventDefault();
      this._handleConfirmDelete(this._id);
    }
    this._submitForm.addEventListener('submit', this._confirmDelete);
  }

  renderLoading(isLoading, submitType) {
    if (isLoading) {
      this._popupSelector.querySelector('.popup__save').textContent = 'Удаление...';
    } else {
      this._popupSelector.querySelector('.popup__save').textContent = submitType;
    }
  }
}