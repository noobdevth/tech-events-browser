import React from 'react'
import styled from 'react-emotion'
import {Head} from 'react-static'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1em;
  min-height: 95vh;
`

const Title = styled.h1`
  margin: 0;

  color: #555;
  font-weight: 300;
  font-size: 2.8em;
`

const Sub = styled.h2`
  margin: 0;
  margin-top: 1em;

  color: #555;
  font-weight: 300;
  font-size: 1.6em;
`

const Landing = () => (
  <Section>
    <Title>Tech Events Browser</Title>
    <Sub>COMING SOON</Sub>
  </Section>
)

export default Landing
