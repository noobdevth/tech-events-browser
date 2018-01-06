import React from 'react'
import {connect} from 'react-redux'
import styled from 'react-emotion'
import {Head} from 'react-static'

import Tags from '../components/Tags'
import EventCard from '../components/EventCard'

// background-image: url(https://noobdevth.firebaseapp.com/static/bg.159aa1b4.jpg);
// background-attachment: fixed;
// background-size: contain;

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

const concat = (x, y) => [...x, ...y]
const unique = vec => [...new Set(vec)]

const TagFilter = key => events =>
  unique(events.map(event => event[key]).reduce(concat, []))

const topicTags = TagFilter('topics')
const categoryTags = TagFilter('categories')

const Landing = ({events}) => (
  <Container>
    <Title>
      TECH EVENTS BROWSER <small>v0.1</small>
    </Title>
    <Tags data={topicTags(events)} color="#8e44ad" />
    <Tags data={categoryTags(events)} color="#1abc9c" />
    <List>
      {events.map(event => <EventCard key={event.id} data={event} />)}
    </List>
  </Container>
)

const mapStateToProps = state => ({events: state.app.events})

const enhance = connect(mapStateToProps)

export default enhance(Landing)
