import {createSelector} from 'reselect'
import Fuse from 'fuse.js'

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

      // FIXME: More tags should make it more specific, not less.
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

    return events
  },
)

export default eventsSelector
