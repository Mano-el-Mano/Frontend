import request from './request'

export default {
  createPost: async content =>
    await request('/protected/posts', {
      method: 'POST',
      body: {
        content
      }
    })
}
