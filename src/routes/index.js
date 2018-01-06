import React from 'react'
import {connect} from 'react-redux'
import styled from 'react-emotion'
import {Head} from 'react-static'

import EventCard from '../components/EventCard'

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

const Landing = ({events}) => (
  <Section>
    <Title>Tech Events Browser</Title>
    {events.map(event => <EventCard key={event.id} data={event} />)}
  </Section>
)

const mapStateToProps = state => ({events: state.app.events})

const enhance = connect(mapStateToProps)

export default enhance(Landing)
