// eslint-disable-next-line @typescript-eslint/no-empty-interface
export class AuthService {
  /**
   * @type {Storage}
   */
  _storage;

  /**
   * @type {string | null}
   */
  _token = null;

  /**
   * @type {string |null}
   */
  _refreshToken = null;

  /**
   * @type {AuthService}
   */
  static _instance;

  static instance() {
    if (!this._instance) {
      this._instance = new this();
    }

    return this._instance;
  }

  static config({ storage }) {
    this.instance()._storage = storage;
  }

  static token() {
    return Promise.resolve(this.instance().token());
  }

  /**
   * @param {string} token
   */
  static setToken(token) {
    return Promise.resolve(this.instance().setToken(token));
  }

  static clearToken() {
    return Promise.resolve(this.instance().clearToken());
  }

  static refreshToken() {
    return Promise.resolve(this.instance().refreshToken());
  }

  /**
   * @param {string} token
   */
  static setRefreshToken(token) {
    return Promise.resolve(this.instance().setRefreshToken(token));
  }

  static clearRefreshToken() {
    return Promise.resolve(this.instance().clearRefreshToken());
  }

  token() {
    this._token = this._token || this._storage?.getItem('authToken') || null;

    return this._token;
  }

  /**
   * @param {string} token
   */
  setToken(token) {
    this._token = token;
    this._storage?.setItem('authToken', token);

    return this._token;
  }

  clearToken() {
    this._token = null;
    this._storage?.removeItem('authToken');
  }

  refreshToken() {
    this._refreshToken = this._refreshToken || this._storage?.getItem('refreshToken') || null;

    return this._refreshToken;
  }

  /**
   * @param {string} token
   */
  setRefreshToken(token) {
    this._refreshToken = token;
    this._storage?.setItem('refreshToken', token);

    return this._refreshToken;
  }

  clearRefreshToken() {
    this._refreshToken = null;
    this._storage?.removeItem('refreshToken');
  }
}
