import React from 'react'
import styled from 'react-emotion'
import {compose, withState} from 'recompose'

import Markdown from '../components/Markdown'

import {truncate} from '../core/util'

const Text = styled.div`
  position: relative;
`

const More = styled.span`
  color: #6259ff;
  cursor: pointer;
  font-size: 0.85em;
`

const Paragraph = ({children, set, full}) => (
  <p>
    {children}&nbsp;
    <More onClick={() => set(!full)}>{full ? 'น้อยลง' : 'เพิ่มเติม'}</More>
  </p>
)

const Truncate = ({text, len, ...more}) => (
  <Text>
    <Markdown
      source={more.full ? text : truncate(text, len)}
      renderers={{paragraph: c => <Paragraph {...more} {...c} />}}
      node
    />
  </Text>
)

const enhance = withState('full', 'set', false)

export default enhance(Truncate)
