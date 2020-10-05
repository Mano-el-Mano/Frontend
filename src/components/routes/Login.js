import React, { useState } from 'react'
import SignUpForm from '../login/SignUpForm'
import LogInForm from '../login/LogInForm'
import styled from 'styled-components'
import requests from '../../util/requests'
import { useHistory } from 'react-router-dom'
import { login } from '../../redux/slices/user'
import { useDispatch } from 'react-redux'
import token from '../../util/token'

const FormContainer = styled.div`
  align-self: center;
  margin-top: 100px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Login = () => {
  const [signInEmail, setSignInEmail] = useState('')
  const [signInPassword, setSignInPassword] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpName, setSignUpName] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [signUpPasswordRepeat, setSignUpPasswordRepeat] = useState('')

  const history = useHistory()
  const dispatch = useDispatch()

  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,:\s@\"]+(\.[^<>()[\]\\.,:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  const onSubmitSignIn = async () => {
    const res = await requests.userRequests.login(signInEmail, signInPassword)
    console.log(res)
    if (res.status === 200) {
      localStorage.setItem('jwt', res.jwt)
      const { email, name, id } = token.decode(res.jwt).payload
      dispatch(login({ email, name, id }))
      history.push('/')
    } else if (res.status === 401) {
      alert('username and password does not match')
    } else if (res.status === 500) {
      console.warn('server error')
    }
  }

  const onSubmitSignUp = async () => {
    const res = await requests.userRequests.signUp(
      signUpEmail,
      signUpPassword,
      signUpName
    )
    if (res.status === 201) {
      const { id, email, name } = res.user
      localStorage.setItem('jwt', res.jwt)
      dispatch(
        login({
          id,
          email,
          name
        })
      )
      history.push('/')
    } else if (res.status === 409) {
      alert('user already exists')
    } else if (res.status === 500) {
      console.warn('server error')
    }
  }

  const validatePassword = password => {
    return password.length > 8
  }

  const validateName = () => {
    return true
  }

  const signUpPasswordsMatch = () => {
    return signUpPassword === signUpPasswordRepeat
  }
  return (
    <Container>
      <FormContainer>
        <h2>Log in</h2>
        <LogInForm
          onSubmit={onSubmitSignIn}
          email={signInEmail}
          setEmail={setSignInEmail}
          validateEmail={validateEmail}
          password={signInPassword}
          setPassword={setSignInPassword}
          validatePassword={validatePassword}
          disableSubmit={() => {
            return !(
              validateEmail(signInEmail) && validatePassword(signInPassword)
            )
          }}
        />
      </FormContainer>
      <FormContainer>
        <h2>Sign up</h2>
        <SignUpForm
          onSubmit={onSubmitSignUp}
          email={signUpEmail}
          setEmail={setSignUpEmail}
          validateEmail={validateEmail}
          password={signUpPassword}
          setPassword={setSignUpPassword}
          validatePassword={validatePassword}
          name={signUpName}
          setName={setSignUpName}
          validateName={validateName}
          repeatPassword={signUpPasswordRepeat}
          setRepeatPassword={setSignUpPasswordRepeat}
          passwordMatches={signUpPasswordsMatch}
          disableSubmit={() => {
            return !(
              validateEmail(signUpEmail) &&
              validatePassword(signUpPassword) &&
              signUpPasswordsMatch() &&
              validateName()
            )
          }}
        />
      </FormContainer>
    </Container>
  )
}

export default Login
