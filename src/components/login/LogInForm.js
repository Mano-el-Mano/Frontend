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
        helperText="Incorrect email"
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
      <Button
        style={{ marginTop: '20px' }}
        variant="outlined"
        color="primary"
        disabled={disableSubmit()}
        onClick={() => onSubmit()}
      >
        Log in
      </Button>
    </Form>
  )
}

export default Login
