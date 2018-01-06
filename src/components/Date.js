import React from 'react'
import styled from 'react-emotion'

const DateContainer = styled.div`
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

const DateView = ({start, end}) => (
  <DateContainer>
    <Date {...start} />&nbsp; until &nbsp;<Date {...end} />
  </DateContainer>
)

export default DateView
