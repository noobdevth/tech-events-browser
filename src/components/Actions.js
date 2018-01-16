import React from 'react'
import styled from 'react-emotion'

const Footer = styled.div`
  display: flex;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

const Action = styled.a`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border: none;
  border-radius: 0;
  outline: none;
  cursor: pointer;

  color: #555;
  font-family: Roboto;
  font-weight: 300;
  font-size: 1.08em;
  text-align: center;
  text-decoration: none;

  width: 100%;
  padding: 0.5em 0.8em;

  background: white;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);

  &:hover {
    color: white;
    background: #555;
    transform: translateY(2px);
  }

  &:active {
    color: white;
    background: #2d2d30;
    transform: translateY(3px);
  }
`

const Link = props => (
  <Action target="_blank" rel="noopener noreferrer" {...props} />
)

// rsvp: url, title, detail?
// ticket: url, ticket, price?
// website: url, title

const Actions = ({data}) => <div />

export default Actions
