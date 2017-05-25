export default class Token {
  static storeName = 'tokens'
  static keyPath = 'address'
  static indexes = [
    ['access_token', ['host', 'access_token'], { unique: true }],
  ]

  constructor(host, access_token) {
    this.host = host
    this.access_token = access_token
  }

  toJS() {
    return {
      host: this.host,
      access_token: this.access_token,
      address: this.address
    }
  }

  get address() {
    return `${this.host}::${this.access_token}`
  }
}
