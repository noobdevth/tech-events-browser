import React from 'react'
import {connect} from 'react-redux'

import {Fav} from '../components/Favorite'

import {toggleFavoriteFilter} from '../ducks/app'

const FavToggle = ({isFavOnly, toggleFav}) => (
  <Fav active={isFavOnly} onClick={toggleFav}>
    Show Favorites Only
  </Fav>
)

const mapStateToProps = state => ({
  isFavOnly: state.app.filterFavorites,
})

const mapDispatchToProps = {
  toggleFav: toggleFavoriteFilter,
}

const enhance = connect(mapStateToProps, mapDispatchToProps)

export default enhance(FavToggle)
