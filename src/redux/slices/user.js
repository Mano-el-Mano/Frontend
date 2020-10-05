/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false,
    id: undefined,
    name: undefined,
    email: undefined,
    posts: undefined
  },
  reducers: {
    login: (state, action) => {
      const { email, name, id } = action.payload
      state.loggedIn = true
      state.id = id
      state.name = name
      state.email = email
    },
    logout: state => {
      state.loggedIn = false
      state.id = undefined
      state.name = undefined
      state.email = undefined
    },
    setUserPosts: (state, action) => {
      // eslint-disable-next-line no-unused-vars
      const { posts } = action.payload
      // TODO implement
    },
    addUserPost: (state, action) => {
      // eslint-disable-next-line no-unused-vars
      const { post } = action.payload
      // TODO implement
    }
  }
})

export const selectUserPosts = state => state.user.posts
export const selectUser = state => state.user

export const { login, logout, setUserPosts, adduserPost } = userSlice.actions

export default userSlice.reducer
