import React from 'react'
import styled from 'styled-components'
import PersonIcon from '@material-ui/icons/PersonOutlineRounded'
import moment from 'moment'

const Post = styled.div`
  -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
  -moz-border-radius: 100px / 2px;
  border-radius: 100px / 2px;
  margin: 50px;
  display: flex;
  padding 30px;
  width: 500px;
  margin: 30px auto 30px auto;
  justify-content: space-between;
  flex-direction: column;
`

const Row = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`

const Content = styled.p``

const Name = styled.p``

const Date = styled.p``

const Login = props => {
  const { name, date, content } = props
  return (
    <Post>
      <Row>
        <PersonIcon style={{ fontSize: '40px' }} />
        <Name>{name}</Name>
        <Date>{moment(date).format('DD/MM/YYYY - hh:mm')}</Date>
      </Row>
      <Row>
        <Content>{content}</Content>
      </Row>
    </Post>
  )
}

export default Login
