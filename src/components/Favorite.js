import React from 'react'
import styled from 'react-emotion'
import {connect} from 'react-redux'

import {toggleFavorite} from '../ducks/app'

export const Fav = styled.button`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border: none;
  border-radius: 0;
  outline: none;
  cursor: pointer;

  margin: 0;
  margin-top: 0.5em;
  padding: 0.28em 0.6em;

  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);

  color: ${props => (props.active ? '#ff7474' : '#555')};
  border-bottom: 1px solid
    ${props => (props.active ? '#ff7474' : 'transparent')};
  font-weight: 300;
  font-size: 1em;
  line-height: 1.3em;
  text-align: center;
`

const Favorite = ({favorite, toggle}) => (
  <Fav onClick={toggle} active={favorite}>
    {favorite ? 'Unfavorite' : 'Mark as Favorite'}
  </Fav>
)

const mapStateToProps = (state, {id}) => ({
  favorite: (id && state.app.favorites[id]) || false,
})

const mapDispatchToProps = (dispatch, {id}) => ({
  toggle: () => id && dispatch(toggleFavorite(id)),
})

const enhance = connect(mapStateToProps, mapDispatchToProps)

export default enhance(Favorite)
