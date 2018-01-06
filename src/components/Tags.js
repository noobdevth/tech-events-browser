import React from 'react'
import styled from 'react-emotion'

const TagList = styled.div`
  display: flex;
`

const Tag = styled.span`
  padding: 0.28em 0.6em;
  margin: 0.2em;
  margin-left: 0.5em;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
  border-bottom: 1px solid #89ebc9;
  color: #666;
  font-weight: 300;
  cursor: pointer;

  &:hover,
  &:active {
    color: white;
    border-bottom: 1px solid transparent;
  }

  &:hover {
    background: #555;
  }

  &:active {
    background: #2d2d30;
  }
`

const Tags = ({data}) => (
  <TagList>{data.map(item => <Tag key={item}>{item}</Tag>)}</TagList>
)

export default Tags
