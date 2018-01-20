import React from 'react'
import {Link} from 'react-static'
import styled from 'react-emotion'
import {connect} from 'react-redux'
import {compose, branch} from 'recompose'

import Card from '../components/Card'
import Icon from '../components/Icon'
import Markdown from '../components/Markdown'
import Truncate from '../components/Truncate'

import eventSelector from '../ducks/event.selector'
import {truncate} from '../core/util'

const Title = styled.h2`
  margin: 0;

  color: #333;
  font-weight: 400;
  font-size: 1.08em;
  line-height: 1.3em;
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

// box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);
const CardHeader = styled.div`
  padding: 1em 1.6em;
`

const CardBody = styled.div`
  padding: 1.3em 1.6em 1em 1.6em;
`

const Line = styled.div`
  width: 60%;
  border-bottom: 2px solid #6259ff;
`

const Summary = styled.div`
  position: relative;
  color: #666;
  font-size: 0.8em;
`

const EventView = ({data}) => (
  <Card>
    <CardHeader>
      <Link to="/">
        <Icon i="longArrowLeft" size={1.2} fill="#666" />
      </Link>
      <Title>{truncate(data.title, 67)}</Title>
    </CardHeader>
    <Line />
    <CardBody>
      <Summary>
        <Truncate text={data.summary} len={220} />
      </Summary>
    </CardBody>
  </Card>
)

const NotFound = () => (
  <Card>
    <Title>The event you requested does not exist.</Title>
  </Card>
)

const mapStateToProps = (state, props) => ({
  data: eventSelector(state, props),
})

const enhance = compose(
  connect(mapStateToProps),
  branch(x => !x.data, () => NotFound),
)

export default enhance(EventView)
