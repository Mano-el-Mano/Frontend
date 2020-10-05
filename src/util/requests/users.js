import request from './request'

export default {
  login: async (email, password) =>
    await request('/public/users/sign-in', {
      method: 'POST',
      body: {
        email,
        password
      }
    }),

  signUp: async (email, password, name) =>
    await request('/public/users/sign-up', {
      method: 'POST',
      body: {
        email,
        password,
        name
      }
    })
}
