export default class UserInfo {
  constructor({ name, job }) {
    this._nameSelector = name;
    this._jobSelector = job;
  }

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      job: this._jobSelector.textContent
    }
  }

  setUserInfo(name, job) {
    this._nameSelector.textContent = name;
    this._jobSelector.textContent = job;
  }
}