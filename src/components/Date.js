import React from 'react'
import styled from 'react-emotion'
import fecha from 'fecha'

import Icon from './Icon'

const Box = styled.div`
  display: flex;

  margin-bottom: 0.6em;
  font-weight: 300;
`

function asDate({date, month, year}) {
  return fecha.format(new Date(year, month - 1, date), 'MMMM Do, YYYY')
}

// If the event is a one-day event
const isOneDay = (start, end) =>
  start.date === end.date &&
  start.month === end.month &&
  start.year === end.year

const DateView = ({start, end}) => (
  <Box>
    <Icon i="calendar" left />
    {asDate(start)}

    {!isOneDay(start, end) && <span>&nbsp;until&nbsp;{asDate(end)}</span>}
  </Box>
)

export default DateView
