import { TextField, Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const Login = props => {
  const {
    onSubmit,
    email,
    setEmail,
    validateEmail,
    password,
    setPassword,
    validatePassword,
    name,
    setName,
    validateName,
    repeatPassword,
    setRepeatPassword,
    passwordMatches,
    disableSubmit
  } = props

  return (
    <Form>
      <TextField
        error={email === '' ? false : !validateEmail(email)}
        onChange={e => {
          setEmail(e.target.value)
        }}
        id="standard-error-helper-text"
        label="Email"
        value={email}
        helperText="Email has to be correctly formatted"
      />
      <TextField
        error={name === '' ? false : !validateName()}
        onChange={e => {
          setName(e.target.value)
        }}
        id="standard-error-helper-text"
        label="Full name"
        value={name}
        helperText="First name and last name must be atleast 2 characters long"
      />
      <TextField
        error={password === '' ? false : !validatePassword(password)}
        id="standard-error-helper-text"
        label="Password"
        type="password"
        value={password}
        onChange={e => {
          setPassword(e.target.value)
        }}
        helperText="Password must be atleast 8 characters long"
      />
      <TextField
        error={repeatPassword === '' ? false : !passwordMatches()}
        id="standard-error-helper-text"
        label="Repeat password"
        type="password"
        value={repeatPassword}
        onChange={e => {
          setRepeatPassword(e.target.value)
        }}
        helperText="Should match previous password"
      />
      <Button
        style={{ marginTop: '20px' }}
        variant="outlined"
        color="primary"
        disabled={disableSubmit()}
        onClick={() => onSubmit()}
      >
        Sign up!
      </Button>
    </Form>
  )
}

export default Login
