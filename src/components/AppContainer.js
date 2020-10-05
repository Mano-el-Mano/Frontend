import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Feed from './routes/Feed'
import Login from './routes/Login'
import styled from 'styled-components'
import Header from './universal/Header'
import token from '../util/token'
import { login } from '../redux/slices/user'
import { setPosts } from '../redux/slices/posts'
import { useDispatch } from 'react-redux'

const Container = styled.div`
  margin-top: 120px;
`

const AppContainer = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const jwt = localStorage.getItem('jwt')
    if (jwt !== null) {
      const { email, name, id } = token.decode(jwt).payload
      dispatch(login({ email, name, id }))
    }
    //fetch posts
    const posts = [
      {
        name: 'Søren Sven',
        date: new Date().toISOString(),
        content: 'Jeg kan ikke lide rugbrød'
      },
      {
        name: 'Søren Sven',
        date: new Date().toISOString(),
        content: 'Jeg kan ikke lide rugbrød'
      },
      {
        name: 'Søren Sven',
        date: new Date().toISOString(),
        content: 'Jeg kan ikke lide rugbrød'
      },
      {
        name: 'Søren Sven',
        date: new Date().toISOString(),
        content: 'Jeg kan ikke lide rugbrød'
      }
    ]

    dispatch(setPosts({ posts }))
  }, [])

  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Feed />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default AppContainer
