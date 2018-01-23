import React from 'react'
import styled from 'react-emotion'

const IFrame = styled.iframe`
  width: 100%;
  height: 350px;
  border: none;
`

const Map = props => {
  const {url, title} = props
  return (
    <div>
      <IFrame
        src={`//www.google.com/maps/embed/v1/place?q=${url}+${title}&zoom=17&key=
        ${process.env.GOOGLE_MAPS_API_KEY}`}
      />
    </div>
  )
}

export default Map
