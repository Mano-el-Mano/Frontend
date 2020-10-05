import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    lastUpdated: undefined
  },
  reducers: {
    setPosts: (state, action) => {
      let { posts } = action.payload
      state.lastUpdated = new Date().toISOString()
      state.posts = posts
    },
    addPost: (state, action) => {
      const post = action.payload
      console.log('POST', post)
      state.posts.push(post)
    }
  }
})

export const selectPosts = state => state.posts.posts

export const { setPosts, addPost } = postsSlice.actions

export default postsSlice.reducer
