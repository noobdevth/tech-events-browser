import React from 'react'
import styled from 'react-emotion'
import {connect} from 'react-redux'

import Card from '../components/Card'
import eventSelector from '../ducks/event.selector'

const Title = styled.h2`
  margin: 0;
  padding: 0.28em 0.6em;

  color: #555;
  font-weight: 300;
  font-size: 1.3em;
  line-height: 1.45em;
  text-align: center;
`

// <small>ID: {id}</small>

const EventView = ({data}) =>
  data ? (
    <Card>
      <Title>{data.title}</Title>
    </Card>
  ) : (
    <div />
  )

const mapStateToProps = (state, props) => ({
  data: eventSelector(state, props),
})

const enhance = connect(mapStateToProps)

export default enhance(EventView)
