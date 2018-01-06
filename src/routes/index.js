import React from 'react'
import {connect} from 'react-redux'
import styled from 'react-emotion'
import {Head} from 'react-static'

import EventCard from '../components/EventCard'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1.5em;
  min-height: 100vh;
  height: auto;
  background: linear-gradient(to left, rgb(28, 216, 210), rgb(147, 237, 199));
`

const Title = styled.h1`
  margin: 0;

  color: white;
  font-weight: 300;
  font-size: 1.8em;
`

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  margin: 0 auto;
  max-width: 1000px;
`

const Landing = ({events}) => (
  <Container>
    <Title>TECH EVENTS BROWSER</Title>
    <List>
      {events.map(event => <EventCard key={event.id} data={event} />)}
    </List>
  </Container>
)

const mapStateToProps = state => ({events: state.app.events})

const enhance = connect(mapStateToProps)

export default enhance(Landing)
