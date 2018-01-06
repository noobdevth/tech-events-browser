import React from 'react'
import styled from 'react-emotion'

// time: [
//   from: hour minute
//   to: hour minute
//   after: bool
//   agenda: String
// ]

const TimeTable = ({data}) => (
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

export default TimeTable
