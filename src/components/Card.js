export class Card {
    constructor({ data, userId, handleDeleteClick, handleConfirmDelete, handleLikeClick, handleCardClick }, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._id = data._id;
        this._owner = data.owner;
        this._ownerId = data.owner._id;
        this._userId = userId;
        this._handleDeleteClick = handleDeleteClick;
        this._handleConfirmDelete = handleConfirmDelete;
        this._handleLikeClick = handleLikeClick;
        this._handleCardClick = handleCardClick;

        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    remove() {
        this._element.remove();
    }

    _requestRemove() {
        this._handleDeleteClick(this._id, this._handleConfirmDelete);
    }

    _openCard() {
        this._handleCardClick.open(this._link, this._name)
    }

    _handleLikeButtonClick() {
        this._handleLikeClick(this._id, this._owner);
    }

    _setEventListeners() {
        this._likeCardButton = this._element.querySelector('.elements__like-button');
        this._removeCardButton = this._element.querySelector('.elements__button-remove');
        this._cardElementImage = this._element.querySelector('.elements__image');

        this._removeCardButton.addEventListener('click', this._requestRemove.bind(this));
        this._likeCardButton.addEventListener('click', this._handleLikeButtonClick.bind(this));
        this._cardElementImage.addEventListener('click', this._openCard.bind(this));
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._cardElementImage.src = this._link;
        this._cardElementImage.alt = `Изображение ${this._name}`;
        this._element.querySelector('.elements__title').textContent = this._name;
        this._element.querySelector('.elements__like-counter').textContent = this._likes.length;
        this._enableRemoveButton();
        this.setLikeStatus(this._likes.length);

        return this._element;
    }

    _enableRemoveButton() {
        if (this._ownerId === this._userId) {
            this._removeCardButton.classList.add('elements__button-remove_active');
        }
    }

    _activateLike() {
        this._likeCardButton.classList.add('elements__like-button_active');
    }

    _unactivateLike() {
        this._likeCardButton.classList.remove('elements__like-button_active');
    }

    setLikeStatus(likeCount) {
        this._element.querySelector('.elements__like-counter').textContent = likeCount;
        if (this.isLiked()) {
            this._activateLike();
        } else {
            this._unactivateLike();
        }
    }

    isLiked() {
        let result = 0;
        this._likes.forEach((item) => {
            if (item._id === this._userId) {
                result++;
            }
        });
        if (result === 1) {
            return true
        } else return false
    }

    refreshLikes(likes) {
        this._likes = likes;
    }


}