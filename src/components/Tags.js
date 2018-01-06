import React from 'react'
import styled from 'react-emotion'

const TagList = styled.div`
  display: flex;
  margin-top: 0.5em;
`

const Tag = styled.span`
  padding: 0.28em 0.6em;
  margin: 0 0.5em 0 0;
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
    background: ${props => props.color};
  }

  &:active {
    background: #2d2d30;
  }
`

const Tags = ({color, data}) => (
  <TagList>
    {data.map(item => (
      <Tag key={item} color={color}>
        {item}
      </Tag>
    ))}
  </TagList>
)

export default Tags
