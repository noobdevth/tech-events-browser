import React from 'react'
import styled from 'react-emotion'

import Markdown from './Markdown'
import Map from './Map'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.6em;
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

const extractLatLng = url =>
  url.split('/@')[0].split('https://www.google.com/maps/place/')[1]

const Location = ({data: {title, url, detail}}) => (
  <div>
    <Container>
      <span>Location:&nbsp;</span>
      <Place title={title} url={url} />&nbsp;
      {detail && <Markdown source={`(${detail})`} />}
    </Container>
    {url && <Map url={extractLatLng(url)} title={title} />}
  </div>
)

export default Location
