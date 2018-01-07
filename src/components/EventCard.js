import React from 'react'
import styled from 'react-emotion'

import Tags from './Tags'
import DateView from './Date'
import Actions from './Actions'
import Markdown from './Markdown'
import Favorite from './Favorite'
import TimeTable from './TimeTable'

const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex: 0 1 100%;

  color: #555;
  background: hsla(0, 0%, 100%, 0.9);
  border-radius: 6px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);

  width: 100%;
  margin-top: 1em;

  @media screen and (max-width: 800px) {
    flex-basis: 100%;
  }
`

// id: String
// start (int): year month date
// end (int): year month date
// categories [String]
// topics [String]
// title
// location: title detail
// summary
// description
// links: [detail title url type]
// declared: filename line column

const Title = styled.h2`
  margin: 0;
  padding: 0.28em 0.6em;

  border-radius: 6px 6px 0px 0px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);

  color: #555;
  font-weight: 300;
  font-size: 1.3em;
  line-height: 1.45em;
  text-align: center;
`

const Summary = styled.article`
  padding: 0 0.78em 0.5em 0.78em;

  color: #555;
  font-weight: 400;
  line-height: 1.5em;
  font-size: 1em;

  word-wrap: break-word;
`

const Desc = styled.article`
  margin-bottom: 0.8em;

  color: #666;
  font-weight: 300;
  line-height: 1.5em;
  font-size: 0.9em;
  white-space: pre-line;
  word-wrap: break-word;
`

const Container = styled.div`
  padding: 1.3em;
  @media screen and (max-width: 500px) {
    padding: 0.9em;
  }
`

const Box = styled.div`
  display: flex;
  align-items: center;
`

// <small>ID: {id}</small>

const quote = text => `“${text.trim()}”`

const EventCard = ({data, favorite}) => {
  const {
    id,
    start,
    end,
    categories,
    topics,
    time,
    title,
    location,
    summary,
    description,
    links,
    declared,
  } = data

  return (
    <Card>
      <Title>{title}</Title>
      <Container>
        {summary && (
          <Summary>
            <Markdown source={quote(summary)} />
          </Summary>
        )}
        <Desc>
          <Markdown source={description.trim()} />
        </Desc>
        <DateView start={start} end={end} />
        <Box>
          Location:&nbsp;
          <Markdown source={location.title} />
          {location.detail && (
            <Markdown source={`&nbsp;(${location.detail})`} />
          )}
        </Box>
        <TimeTable data={time} />
        <Box>
          <Tags data={topics} color="#8e44ad" />
          <Tags data={categories} color="#3498db" />
          <Favorite id={id} />
        </Box>
      </Container>
      <Actions data={links} />
    </Card>
  )
}

export default EventCard
