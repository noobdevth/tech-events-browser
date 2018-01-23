import React from 'react'
import {Link} from 'react-static'
import styled from 'react-emotion'

import Card from './Card'

import Tags from './Tags'
import DateView from './Date'
import Actions from './Actions'
import Markdown from './Markdown'
import Location from './Location'
import Favorite from './Favorite'
import TimeTable from './TimeTable'
import Map from './Map'

import {truncate, quote} from '../core/util'

const CardLink = styled(Link)`
  text-decoration: none;
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
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);

  color: #555;
  font-weight: 300;
  font-size: 1.3em;
  line-height: 1.45em;
  text-align: center;
`

const Summary = styled.article`
  padding: 0 0.78em 0.5em 0.78em;

  color: #666;
  font-weight: 300;
  line-height: 1.5em;
  font-size: 1em;

  word-wrap: break-word;
`

const Container = styled.div`
  padding: 1.3em;
  @media screen and (max-width: 500px) {
    padding: 0.9em;
  }
`

const Inline = styled.div`
  display: flex;
  align-items: center;
`

// <small>ID: {id}</small>

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
      <CardLink to={`/event/${id}`}>
        <Title>{title}</Title>
      </CardLink>
      <Container>
        <Summary>
          <Markdown source={quote(truncate(summary || description, 180))} />
        </Summary>
        <DateView start={start} end={end} />
        <Location data={location} />
        {location.url && <Map url={location.url} />}
        <Inline>
          <Tags data={topics} color="#8e44ad" />
          <Tags data={categories} color="#3498db" />
        </Inline>
      </Container>
    </Card>
  )
}

export default EventCard
