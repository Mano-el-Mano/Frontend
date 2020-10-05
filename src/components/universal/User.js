import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, logout } from '../../redux/slices/user'

const Container = styled.div`
  position: fixed;
  top: 11px;
  left: 50px;
  display: flex;
`

const Name = styled.p`
  font-size: 20px;
`

const Logout = styled.button`
  color: red;
  border: none;
  outline: none;
  background-color: inherit;
  padding: 14px 28px;
  font-size: 20px;
  cursor: pointer;
  display: inline-block;
  :hover {
    cursor: pointer;
  }
`

const User = props => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  console.log(logout)
  return (
    <Container>
      <Name>{`Logged in as: ${user.name}`}</Name>
      <Logout
        onClick={() => {
          console.log('clicked!')
          dispatch(logout())
        }}
      >
        log out
      </Logout>
    </Container>
  )
}

export default User
