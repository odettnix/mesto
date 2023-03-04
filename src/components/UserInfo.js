export default class UserInfo {
  constructor({ name, about, avatar }) {
    this._nameSelector = document.querySelector(name);
    this._aboutSelector = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      about: this._aboutSelector.textContent
    }
  }

  setUserInfo(name, about) {
    this._nameSelector.textContent = name;
    this._aboutSelector.textContent = about;
  }

  setUserAvatar(avatar) {
    this._avatar.src = avatar
  }
}