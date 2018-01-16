import React from 'react'
import styled from 'react-emotion'

import Icon from './Icon'
import Markdown from './Markdown'

const Container = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const Detail = styled.div`
  color: #666;
  font-size: 0.85em;
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
    <Icon i="mapPin" left />
    <Place title={title} url={url} />&nbsp;
    <Detail>{detail && <Markdown source={`(${detail})`} />}</Detail>
  </Container>
)

export default Location
