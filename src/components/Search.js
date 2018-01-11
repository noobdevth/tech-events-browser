import React from 'react'
import {connect} from 'react-redux'
import styled from 'react-emotion'

import {setSearch} from '../ducks/app'

const Input = styled.input`
  margin-top: 1em;
  padding: 0.3em 1em;

  outline: none;
  background: #ffffff;
  border: none;
  border-bottom: 2px solid #555;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  transition: 1s cubic-bezier(0.22, 0.61, 0.36, 1) all;

  color: #333;
  font-size: 1.2em;
  font-family: Roboto, Sukhumvit Set, sans-serif;
  font-weight: 300;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }
`

const Search = ({search, set}) => (
  <Input
    onChange={e => set(e.target.value)}
    value={search}
    placeholder="Search for Event"
  />
)

const mapStateToProps = state => ({search: state.app.search})

const enhance = connect(mapStateToProps, {set: setSearch})

export default enhance(Search)
