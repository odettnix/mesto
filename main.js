(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t,n){var r=t.data,o=t.userId,i=t.handleDeleteClick,u=t.handleConfirmDelete,a=t.handleLikeClick,c=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=r.name,this._link=r.link,this._likes=r.likes,this._id=r._id,this._owner=r.owner,this._ownerId=r.owner._id,this._userId=o,this._handleDeleteClick=i,this._handleConfirmDelete=u,this._handleLikeClick=a,this._handleCardClick=c,this._templateSelector=n}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_remove",value:function(){this._element.remove()}},{key:"_requestRemove",value:function(){this._handleDeleteClick(this._id,this._handleConfirmDelete)}},{key:"_openCard",value:function(){this._handleCardClick.open(this._link,this._name)}},{key:"_handleLikeButtonClick",value:function(){this._handleLikeClick(this._id,this._owner)}},{key:"_setEventListeners",value:function(){this._likeCardButton=this._element.querySelector(".elements__like-button"),this._removeCardButton=this._element.querySelector(".elements__button-remove"),this._cardElementImage=this._element.querySelector(".elements__image"),this._removeCardButton.addEventListener("click",this._requestRemove.bind(this)),this._likeCardButton.addEventListener("click",this._handleLikeButtonClick.bind(this)),this._cardElementImage.addEventListener("click",this._openCard.bind(this))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._cardElementImage.src=this._link,this._cardElementImage.alt="Изображение ".concat(this._name),this._element.querySelector(".elements__title").textContent=this._name,this._element.querySelector(".elements__like-counter").textContent=this._likes.length,this._enableRemoveButton(),this.setLikeStatus(this._likes.length),this._element}},{key:"_enableRemoveButton",value:function(){this._ownerId===this._userId&&this._removeCardButton.classList.add("elements__button-remove_active")}},{key:"_activateLike",value:function(){this._likeCardButton.classList.add("elements__like-button_active")}},{key:"_unactivateLike",value:function(){this._likeCardButton.classList.remove("elements__like-button_active")}},{key:"setLikeStatus",value:function(e){this._element.querySelector(".elements__like-counter").textContent=e,this.isLiked()?this._activateLike():this._unactivateLike()}},{key:"isLiked",value:function(){var e=this,t=0;return this._likes.forEach((function(n){n._id===e._userId&&t++})),1===t}},{key:"refreshLikes",value:function(e){this._likes=e}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._formElement.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_hideInputError",value:function(e){this._errorElement=this._formElement.querySelector(".".concat(e.id,"-error")),this._errorElement.textContent="",e.classList.remove(this._settings.inputErrorClass)}},{key:"_showInputError",value:function(e){this._errorElement=this._formElement.querySelector(".".concat(e.id,"-error")),this._errorElement.textContent=e.validationMessage,e.classList.add(this._settings.inputErrorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._settings.inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._settings.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._formElement.addEventListener("submit",(function(e){return e.preventDefault()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){return e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._card=t._renderer(e),t._addItemReversed(t._card)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"_addItemReversed",value:function(e){this._container.append(e)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close"))&&e.close()})),this._popup.querySelector(".popup__close").addEventListener("click",this.close.bind(this))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitFunction=t,n._formInputs=Array.from(n._popup.querySelectorAll(".popup__input")),n._formSelector=n._popup.querySelector(".popup__form"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formInputValues={},this._formInputs.forEach((function(t){e._formInputValues[t.name]=t.value})),this._formInputValues}},{key:"close",value:function(){h(m(u.prototype),"close",this).call(this),this._formSelector.reset()}},{key:"setEventListeners",value:function(){var e=this;h(m(u.prototype),"setEventListeners",this).call(this),this._formSelector.addEventListener("submit",(function(t){t.preventDefault(),e._submitFunction(e._getInputValues())}))}},{key:"renderLoading",value:function(e,t){this._popup.querySelector(".popup__save").textContent=e?"Сохранение...":t}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}var S=function(){function e(t){var n=t.name,r=t.about,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=n,this._aboutSelector=r,this._avatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameSelector.textContent,about:this._aboutSelector.textContent}}},{key:"setUserInfo",value:function(e,t){this._nameSelector.textContent=e,this._aboutSelector.textContent=t}},{key:"setUserAvatar",value:function(e){this._avatar.src=e}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=document.querySelector(".popup__image"),t._caption=document.querySelector(".popup__image-caption"),t}return t=u,(n=[{key:"open",value:function(e,t){w(C(u.prototype),"open",this).call(this),this._image.src=e,this._image.alt="Изображение ".concat(t),this._caption.textContent=t}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._submitForm=t._popup.querySelector("#delete-card"),t}return t=u,(n=[{key:"open",value:function(e,t){P(q(u.prototype),"open",this).call(this),this._id=e,this._handleConfirmDelete=t}},{key:"close",value:function(){P(q(u.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;P(q(u.prototype),"setEventListeners",this).call(this),this._confirmDelete=function(t){t.preventDefault(),e._handleConfirmDelete(e._id)},this._submitForm.addEventListener("submit",this._confirmDelete)}},{key:"renderLoading",value:function(e,t){this._popup.querySelector(".popup__save").textContent=e?"Удаление...":t}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==R(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}var x=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r,this._checkStatus=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._checkStatus)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._checkStatus)}},{key:"saveNewUserInfo",value:function(e,t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkStatus)}},{key:"saveNewUserAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkStatus)}},{key:"createCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkStatus)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkStatus)}},{key:"likeCard",value:function(e,t){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers,body:JSON.stringify({likes:[t]})}).then(this._checkStatus)}},{key:"dislikeCard",value:function(e,t){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers,body:JSON.stringify({likes:[t]})}).then(this._checkStatus)}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),D=(document.querySelector("#popup__close-image"),document.querySelectorAll(".popup"),document.querySelector("#popup__profile")),A=document.querySelector("#profile__edit-button"),U=document.querySelector("#profile__name"),V=document.querySelector("#profile__text"),N=document.querySelector(".popup__input_value-name"),J=document.querySelector(".popup__input_value-text"),F=(document.querySelector("#popup__form-profile"),document.querySelector("#popup__form-add"),document.querySelector("#popup__add")),H=document.querySelector("#profile__add-button"),M=(document.querySelector(".popup__input_value-url"),document.querySelector(".popup__input_value-location"),document.querySelector(".elements__gallery")),z=document.querySelector("#popup__image"),$=(document.querySelector(".popup__image"),z.querySelector(".popup__image-caption"),document.querySelector("#popup__avatar")),G=(document.querySelector("#popup__confirm"),$.querySelector("#popup__form-profile"),document.querySelector(".profile__avatar-button")),K=document.querySelector(".profile__avatar-picture"),Q=document.querySelector("#popup__confirm"),W={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__input_error"};function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Y=new x({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-60",headers:{authorization:"990eb1b4-940b-4d98-be8e-e780cfa06b2c","Content-Type":"application/json"}}),Z=new S({name:U,about:V,avatar:K}),ee="";Promise.all([Y.getUserInfo(),Y.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ee=o._id,Z.setUserInfo(o.name,o.about),Z.setUserAvatar(o.avatar),oe.renderItems(i)})).catch((function(e){console.log(e)}));var te=new O(z),ne=new v(F,(function(e){ne.renderLoading(!0);var t={name:e.popup__name,link:e.popup__text};Y.createCard(t).then((function(e){var t=ie(e);oe.addItem(t),ne.close()})).catch((function(e){console.log("Ошибка при создании новой карточки: ".concat(e))})).finally((function(){ne.renderLoading(!1,"Создать")}))})),re=new T(Q);ne.setEventListeners(),te.setEventListeners(),re.setEventListeners();var oe=new c({renderer:function(e){return ie(e)}},M);function ie(e){var t=new n({data:e,userId:ee,handleDeleteClick:function(e,t){re.open(e,t)},handleConfirmDelete:function(e){re.renderLoading(!0),Y.deleteCard(e).then((function(){t._remove(),re.close()})).catch((function(e){console.log("Ошибка при удалении карточки: ".concat(e))})).finally((function(){re.renderLoading(!1,"Да")}))},handleLikeClick:function(e,n){t.isLiked()?Y.dislikeCard(e,n).then((function(e){t.refreshLikes(e.likes),t.setLikeStatus(e.likes.length)})).catch((function(e){console.log("Ошибка при удалении лайка: ".concat(e))})):Y.likeCard(e,n).then((function(e){t.refreshLikes(e.likes),t.setLikeStatus(e.likes.length)})).catch((function(e){console.log("Ошибка при постановке лайка: ".concat(e))}))},handleCardClick:te},"#template");return t.generateCard()}H.addEventListener("click",(function(){ne.open(),le.resetValidation()}));var ue=new v(D,(function(e){ue.renderLoading(!0),Y.saveNewUserInfo(e.popup__name,e.popup__text).then((function(){Y.getUserInfo().then((function(e){Z.setUserInfo(e.name,e.about),ue.close()}))})).catch((function(e){console.log(e)})).finally((function(){ue.renderLoading(!1,"Сохранить")}))}));ue.setEventListeners(),A.addEventListener("click",(function(){ue.open();var e=Z.getUserInfo();N.value=e.name,J.value=e.about,ce.resetValidation()}));var ae=new v($,(function(e){ae.renderLoading(!0),Y.saveNewUserAvatar(e.popup__avatar).then((function(){Y.getUserInfo().then((function(e){Z.setUserAvatar(e.avatar),ae.close()}))})).catch((function(e){console.log(e)})).finally((function(){ae.renderLoading(!1,"Сохранить")}))}));ae.setEventListeners(),G.addEventListener("click",(function(){ae.open(),se.resetValidation()}));var ce=new i(W,D),le=new i(W,F),se=new i(W,$);ce.enableValidation(),le.enableValidation(),se.enableValidation()})();