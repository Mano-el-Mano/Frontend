import { TextField, Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  width: 500px;
  left: 20px;
  top: 40%;
`

const InnerContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
`
const PostForm = props => {
  const { disableSubmit, onSubmit, text, setText } = props

  const handleChange = event => {
    setText(event.target.value)
  }

  return (
    <Container>
      <InnerContainer>
        <h2>Make a post!</h2>
        <TextField
          id="full-width-text-field"
          style={{
            margin: '5px 0px 20px 0px'
          }}
          rows={3}
          rowsMax={6}
          label="Post..."
          value={text}
          variant="outlined"
          multiline
          onChange={handleChange}
        />
        <Button
          style={{ marginTop: '10px' }}
          variant="outlined"
          color="primary"
          disabled={disableSubmit()}
          onClick={onSubmit}
        >
          Create a post!
        </Button>
      </InnerContainer>
    </Container>
  )
}

export default PostForm
