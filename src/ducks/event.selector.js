import {createSelector} from 'reselect'

const eventSelector = createSelector(
  (state, props) => props.match.params.id,
  state => state.app.events,
  (id, events) => events.filter(event => event.id === id)[0],
)

export default eventSelector
