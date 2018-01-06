import React from 'react'
import {connect} from 'react-redux'
import styled, {css} from 'react-emotion'
import {lighten, darken} from 'polished'

import {toggleTagFilter} from '../ducks/app'

const TagContainer = styled.div`
  display: flex;
`

// prettier-ignore
const Tag = styled.span`
  padding: 0.28em 0.6em;
  margin: 0.5em 0.5em 0 0;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
  border-bottom: 1px solid ${props => props.color || '#555'};
  color: ${props => props.color || '#555'};
  font-weight: 300;
  cursor: pointer;

  text-transform: capitalize;

  &:hover,
  &:active {
    color: white;
    border-bottom: 1px solid transparent;
  }

  &:hover {
    background: ${props => lighten(0.1, props.color)};
  }

  &:active {
    background: ${props => props.color};
  }

  ${props => props.active && css`
    color: white;
    background: ${props.color};

    &:hover {
      background: ${darken(0.1, props.color)};
    }
  `};
`

const Tags = ({color, data, active, onClick}) => (
  <TagContainer>
    {data.map(item => (
      <Tag
        key={item}
        color={color}
        active={active[item]}
        onClick={() => onClick(item)}>
        {item}
      </Tag>
    ))}
  </TagContainer>
)

const mapStateToProps = state => ({
  active: state.app.tagFilters,
})

const mapDispatchToProps = {
  onClick: toggleTagFilter,
}

const enhance = connect(mapStateToProps, mapDispatchToProps)

export default enhance(Tags)
