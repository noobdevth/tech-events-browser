import React from 'react'
import styled from 'react-emotion'

import Markdown from './Markdown'

const Container = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const Link = styled.a`
  color: #3498db;
  text-decoration: none;
`

const Place = ({url, title}) =>
  url ? (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      {title}
    </Link>
  ) : (
    <span>{title}</span>
  )

const Location = ({data: {title, url, detail}}) => (
  <Container>
    <span>Location:&nbsp;</span>
    <Place title={title} url={url} />&nbsp;
    {detail && <Markdown source={`(${detail})`} />}
  </Container>
)

export default Location
