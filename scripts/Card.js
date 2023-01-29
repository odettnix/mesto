export class Card {
    constructor(data, templateSelector, openImage) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._openImage = openImage;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    _setEventListeners() {
        this._likeCardButton = this._element.querySelector('.elements__like');
        this._removeCardButton = this._element.querySelector('.elements__button-remove');
        this._cardElementImage = this._element.querySelector('.elements__image');

        this._likeCardButton.addEventListener('click', () => this._likeCardButton.classList.toggle('elements__like_active'));
        this._removeCardButton.addEventListener('click', () => this._element.remove());
        this._cardElementImage.addEventListener('click', () => this._openImage(this._link, this._name));
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._cardElementImage.src = this._link;
        this._cardElementImage.alt = `Изображение ${this._name}`;
        this._element.querySelector('.elements__title').textContent = this._name;

        return this._element;
    }
}