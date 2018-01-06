import React from 'react'
import {connect} from 'react-redux'
import styled from 'react-emotion'
import {createSelector} from 'reselect'

import Search from '../components/Search'
import TagList from '../components/TagList'
import EventCard from '../components/EventCard'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1.5em;
  min-height: 100vh;
  height: auto;
  overflow: hidden;

  background-image: linear-gradient(
    to left,
    rgb(28, 216, 210),
    rgb(147, 237, 199)
  );

  @media screen and (max-width: 500px) {
    font-size: 13px;
    padding: 0.8em;
  }
`

const Title = styled.h1`
  margin: 0;

  color: white;
  font-weight: 300;
  font-size: 1.38em;
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
    <Title>
      TECH EVENTS BROWSER <small>v0.1</small>
    </Title>
    <TagList />
    <Search />
    <List>
      {events.map(event => <EventCard key={event.id} data={event} />)}
    </List>
  </Container>
)

const filterEvents = createSelector(
  state => state.app.events,
  state => state.app.search,
  (events, search) =>
    search ? events.filter(event => event.title.indexOf(search) > -1) : events,
)

const mapStateToProps = state => ({
  events: filterEvents(state),
})

const enhance = connect(mapStateToProps)

export default enhance(Landing)
