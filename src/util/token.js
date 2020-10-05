import jwt from 'jsonwebtoken'

export default {
  decode: token => {
    return jwt.decode(token, { complete: true })
  }
}
