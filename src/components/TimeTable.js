import React from 'react'
import styled from 'react-emotion'

// time: [
//   from: hour minute
//   to: hour minute
//   after: bool
//   agenda: String
// ]

const Agenda = styled.div`
  display: flex;

  margin-top: 0.5em;
`

const Time = styled.div``

const time = num => (num < 10 ? '0' + num : num)

const TimeView = ({hour, minute, children}) => (
  <Time>
    {time(hour)}:{time(minute)}
  </Time>
)

const Title = styled.div``

const Session = ({agenda, from, to, after}) => (
  <Agenda key={agenda}>
    <Title>{agenda || 'Time'}:&nbsp;</Title>
    <TimeView {...from} />
    &nbsp;~&nbsp;
    <TimeView {...to} />
    {after && '++'}
  </Agenda>
)

const TimeTable = ({data}) => (
  <div>{data && data.map(data => <Session key={data.agenda} {...data} />)}</div>
)

export default TimeTable
