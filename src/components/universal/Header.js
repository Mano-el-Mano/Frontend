import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import PersonIcon from '@material-ui/icons/PersonOutlineRounded'
import ChatBubbleIcon from '@material-ui/icons/ChatBubbleOutlineRounded'
import styled from 'styled-components'
import { useHistory, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/slices/user'
import User from './User'

const Container = styled.div`
  background-color: #fff;
  position: fixed;
  display: flex;
  width: 100%;
  height: 90px;
  top: 0px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.54);
`
const useStyles = makeStyles({
  root: {
    paddingTop: '20px',
    width: 500,
    margin: '0px auto 0px auto;'
  }
})

const Header = props => {
  const classes = useStyles()

  const user = useSelector(selectUser)
  const history = useHistory()

  const { pathname: route } = useLocation()

  return (
    <Container>
      {user.loggedIn && <User />}
      <BottomNavigation
        value={route === '/login' ? 1 : 0}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          onClick={() => {
            history.push('/')
          }}
          label="Feed"
          icon={<ChatBubbleIcon />}
        />
        <BottomNavigationAction
          onClick={() => {
            history.push('/login')
          }}
          label="Login"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </Container>
  )
}

export default Header
