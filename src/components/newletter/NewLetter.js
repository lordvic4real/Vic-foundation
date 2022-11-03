import React from 'react'
import styled from 'styled-components'
import { CausesBtn } from '../../utils/button'
import { Container } from './styles'

const Btn = styled(CausesBtn)`
  padding: 18px 34px;
  :hover {
    color: #ec8593;
  }
`

const NewLetter = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello')
  }
  return (
    <Container>
      <div className="input-container">
        <h1>subcribe to our news NewLetters</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type={'email'}
                placeholder="please enter your email"
                name="name"
              />
            </div>
            <div>
              <Btn type="submit">subcribe</Btn>
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default NewLetter
