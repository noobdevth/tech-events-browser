import React from 'react'
import {connect} from 'react-redux'
import styled from 'react-emotion'
import fecha from 'fecha'

import Search from '../components/Search'
import TagList from '../components/TagList'
import EventCard from '../components/EventCard'

import eventsSelector from '../ducks/events.selector'
import { dateParser } from '../core/util'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1.5em;
  height: auto;
  overflow: hidden;

  @media screen and (max-width: 500px) {
    font-size: 13px;
    padding: 0.8em;
  }
`

const Title = styled.h1`
  margin: 0;

  color: black;
  font-weight: 300;
  font-size: 1.38em;
  margin-bottom: 20px;
`

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  margin: 0 auto;
  max-width: 1000px;
`

const Landing = ({upcomingEvents, pastEvents}) => (
  <Container>
    <Title>Upcoming Events</Title>
    <List>
      {upcomingEvents.map(event => <EventCard key={event.id} data={event} />)}
    </List>
    <Title>Past Events</Title>
    <List>
      {pastEvents.map(event => <EventCard key={event.id} data={event} />)}
    </List>
  </Container>
)

const mapStateToProps = state => ({
  ...eventsSelector(state),
})

const enhance = connect(mapStateToProps)

export default enhance(Landing)
