import React from 'react'
import styled from 'react-emotion'
import ReactMarkdown from 'react-markdown'

const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex: 0 1 100%;

  color: #555;
  background: hsla(0, 0%, 100%, 0.9);
  border-radius: 6px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);

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
// time: [
//   from: hour minute
//   to: hour minute
//   after: bool
//   agenda: String
// ]
// title
// location: title detail
// summary
// description
// links: [detail title url type]
// declared: filename line column

const Time = ({data}) => (
  <div>
    {data &&
      data.map(({agenda, from, to, after}) => (
        <div key={agenda}>
          {agenda && <div>[ {agenda} ]</div>}
          <div>
            From: {from.hour}:{from.minute}
          </div>
          <div>
            To: {to.hour}:{to.minute}
          </div>
          <div>After: {after ? 'Yes' : 'No'}</div>
        </div>
      ))}
  </div>
)

const Title = styled.h2`
  margin: 0;
  padding: 0.8em;

  border-radius: 6px 6px 0px 0px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);

  color: #555;
  font-weight: 300;
  font-size: 1.4em;
  line-height: 1.55em;
  text-align: center;
`

const Desc = styled.article`
  color: #666;
  font-weight: 300;
  line-height: 1.5em;
  font-size: 0.85em;
  white-space: pre-line;
`

const Summary = styled.article`
  padding: 0.78em;

  color: #555;
  line-height: 1.5em;
  font-size: 1em;
`

const Container = styled.div`
  padding: 1em;
`

const Tags = ({data}) => <ul>{data.map(item => <li key={item}>{item}</li>)}</ul>

const Markdown = styled(ReactMarkdown)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
  p {
    margin: 0;
  }
`

const EventCard = ({data}) => {
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
        <Summary>
          <Markdown source={summary} />
        </Summary>
        <Desc>
          <Markdown source={description} />
        </Desc>
        <div>
          Date:{' '}
          <span>
            {start.date}/{start.month}/{start.year}
          </span>{' '}
          until{' '}
          <span>
            {end.date}/{end.month}/{end.year}
          </span>
        </div>
        <div>
          Categories: <Tags data={categories} />
        </div>
        <div>
          Topics: <Tags data={topics} />
        </div>
        <Time data={time} />
        <small>ID: {id}</small>
      </Container>
    </Card>
  )
}

export default EventCard
