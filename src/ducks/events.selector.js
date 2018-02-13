import {createSelector} from 'reselect'
import Fuse from 'fuse.js'

import { dateParser } from '../core/util'

const searchOptions = {
  shouldSort: true,
  keys: [
    'id',
    'title',
    'summary',
    'description',
    'location.title',
    'categories',
    'topics',
  ],
}

const getTruthyKeys = data =>
  Object.entries(data)
    .filter(([_, value]) => value)
    .map(([key]) => key)

function filterByTags(events, tagFilters) {
  const selectedTags = getTruthyKeys(tagFilters)

  if (selectedTags.length > 0) {
    return events.filter(event => {
      const eventTags = [...event.topics, ...event.categories]

      return selectedTags.every(tag => eventTags.includes(tag))
    })
  }

  return events
}

function filterBySearch(events, query) {
  if (query) {
    const fuse = new Fuse(events, searchOptions)
    return fuse.search(query)
  }

  return events
}

function filterByFavorites(events, isFavOnly, favorites) {
  if (isFavOnly) {
    return events.filter(item => favorites[item.id])
  }

  return events
}

function splitEvents(events) {
  const startOfToday = new Date()
  startOfToday.setHours(0, 0, 0, 0)
  const upcomingEvents = events
    .filter(event => dateParser(event.start) - startOfToday >= 0)
    .sort((a, b) => {
      const aDate = dateParser(a.start)
      const bDate = dateParser(b.start)
      if (aDate - bDate > 0) return 1
      else if (aDate - bDate < 0) return -1
      return 0
    })
  const pastEvents = events.filter(
    event => dateParser(event.start) - startOfToday < 0,
  )
  return {
    pastEvents,
    upcomingEvents,
  }
}

const eventsSelector = createSelector(
  state => state.app.events,
  state => state.app.search,
  state => state.app.tagFilters,
  state => state.app.filterFavorites,
  state => state.app.favorites,
  (events, query, tagFilters, isFavOnly, favs) => {
    events = filterByTags(events, tagFilters)
    events = filterBySearch(events, query)
    events = filterByFavorites(events, isFavOnly, favs)
    events = splitEvents(events)
    return events
  },
)

export default eventsSelector
