import React from 'react'
import styled from 'react-emotion'

import Icon from './Icon'
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

const Detail = styled.div`
  color: #777;
  font-size: 0.85em;
  line-height: 18px;
`

const Place = styled.div`
  @media screen and (min-width: 600px) {
    display: flex;
  }
`

const Link = styled.a`
  color: #3498db;
  text-decoration: none;
`

const extractLatLng = url =>
  url.split('/@')[0].split('https://www.google.com/maps/place/')[1]

const Location = ({data: {title = 'Unknown Place', url = '#!', detail}}) => (
  <Container>
    <Icon i="mapPin" left />
    <Place>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        {title}&nbsp;
      </Link>
      <Detail>{detail && <Markdown source={`(${detail})`} />}</Detail>
    </Place>
  </Container>
)

export default Location
