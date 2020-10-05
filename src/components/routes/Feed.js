import React, { useState } from 'react'
import Post from '../feed/Post'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../../redux/slices/user'
import { selectPosts, addPost } from '../../redux/slices/posts'
import PostForm from '../feed/PostForm'
import requests from '../../util/requests'

const Posts = styled.div``

const Feed = props => {
  const user = useSelector(selectUser)
  const posts = useSelector(selectPosts)
  const dispatch = useDispatch()

  const [formText, setFormText] = useState('')

  const disableFormSubmit = () => {
    return formText.length < 10
  }

  const onSubmit = async () => {
    setFormText('')
    const { post } = await requests.postRequests.createPost(formText)
    console.log('typeof post', post.createdAt)
    dispatch(
      addPost({
        content: post.content,
        name: user.name,
        date: new Date(post.createdAt).toISOString()
      })
    )
  }
  return (
    <div>
      {user.loggedIn && (
        <PostForm
          disableSubmit={disableFormSubmit}
          onSubmit={onSubmit}
          text={formText}
          setText={setFormText}
        />
      )}

      <Posts>
        {posts.map((post, i) => {
          //console.log(post)
          return (
            <Post
              key={i}
              name={post.name}
              date={new Date(post.date)}
              content={post.content}
            />
          )
        })}
      </Posts>
    </div>
  )
}

export default Feed
