import React from 'react'
import styled from 'react-emotion'
import {connect} from 'react-redux'

import Tags from '../components/Tags'

const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    justify-content: center;
    flex-wrap: wrap;
  }
`

const concat = (x, y) => [...x, ...y]
const unique = vec => [...new Set(vec)]

const TagFilter = key => events =>
  unique(events.map(event => event[key]).reduce(concat, []))

const topicTags = TagFilter('topics')
const categoryTags = TagFilter('categories')

const TagList = ({events}) => (
  <TagsContainer>
    <Tags data={topicTags(events)} color="#8e44ad" />
    <Tags data={categoryTags(events)} color="#3498db" />
  </TagsContainer>
)

const mapStateToProps = state => ({
  events: state.app.events,
})

const enhance = connect(mapStateToProps)

export default enhance(TagList)
