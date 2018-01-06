import React from 'react'
import styled from 'react-emotion'
import {connect} from 'react-redux'

import Tags from '../components/Tags'

import {toggleTagFilter} from '../ducks/app'

const concat = (x, y) => [...x, ...y]
const unique = vec => [...new Set(vec)]

const TagFilter = key => events =>
  unique(events.map(event => event[key]).reduce(concat, []))

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

const topicTags = TagFilter('topics')
const categoryTags = TagFilter('categories')

const TagList = ({events, ...props}) => (
  <TagsContainer>
    <Tags data={topicTags(events)} color="#8e44ad" {...props} />
    <Tags data={categoryTags(events)} color="#3498db" {...props} />
  </TagsContainer>
)

const mapStateToProps = state => ({
  events: state.app.events,
  active: state.app.tagFilters,
})

const enhance = connect(mapStateToProps, {onClick: toggleTagFilter})

export default enhance(TagList)
