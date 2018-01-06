import React from 'react'
import styled from 'react-emotion'
import {connect} from 'react-redux'

import Tags from '../components/Tags'
import {Fav} from '../components/Favorite'

import {toggleTagFilter, toggleFavoriteFilter} from '../ducks/app'

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

const TagList = ({events, isFavOnly, toggleFav, ...props}) => (
  <TagsContainer>
    <Tags data={topicTags(events)} color="#8e44ad" {...props} />
    <Tags data={categoryTags(events)} color="#3498db" {...props} />
    <Fav active={isFavOnly} onClick={toggleFav}>
      Show Favorites Only
    </Fav>
  </TagsContainer>
)

const mapStateToProps = state => ({
  events: state.app.events,
  active: state.app.tagFilters,
  isFavOnly: state.app.filterFavorites,
})

const mapDispatchToProps = {
  onClick: toggleTagFilter,
  toggleFav: toggleFavoriteFilter,
}

const enhance = connect(mapStateToProps, mapDispatchToProps)

export default enhance(TagList)
