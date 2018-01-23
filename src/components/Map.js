import React from 'react'
import styled from 'react-emotion'

const IFrame = styled.iframe`
  width: 100%;
  height: 350px;
  border: none;
`

const extractLocation = (url = '') =>
  url.split('/@')[0].split('/maps/place/')[1]

const Map = props => {
  const {url} = props
  return (
    <div>
      <IFrame
        src={`//www.google.com/maps/embed/v1/place?q=
        ${extractLocation(url)}&zoom=17&key=
        ${process.env.GOOGLE_MAPS_API_KEY}`}
      />
    </div>
  )
}

export default Map
