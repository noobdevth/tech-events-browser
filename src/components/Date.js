import React from 'react'
import styled from 'react-emotion'

const Box = styled.div`
  display: flex;

  margin-bottom: 0.6em;
`

const DateBox = styled.div`
  font-weight: 300;
`

export const Date = ({date, month, year}) => (
  <DateBox>
    {date}/{month}/{year}
  </DateBox>
)

const isOneDay = (start, end) =>
  start.date === end.date &&
  start.month === end.month &&
  start.year === end.year

const DateView = ({start, end}) => {
  if (isOneDay(start, end)) {
    return (
      <Box>
        <span>Date: </span>
        &nbsp;<Date {...start} />
      </Box>
    )
  }

  return (
    <Box>
      <span>Date: </span>
      &nbsp;<Date {...start} />&nbsp;until&nbsp;<Date {...end} />
    </Box>
  )
}

export default DateView
