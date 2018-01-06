import React from 'react'
import styled from 'react-emotion'

const Card = styled.div`
  margin-top: 1em;

  padding: 1em;
`

const Code = styled.code`
  white-space: pre-wrap;
`

const EventCard = ({data}) => (
  <Card>
    <Code>{JSON.stringify(data, null, 2)}</Code>
  </Card>
)

export default EventCard
