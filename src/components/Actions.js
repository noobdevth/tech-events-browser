import React from 'react'
import styled from 'react-emotion'

const Footer = styled.div`
  display: flex;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

const Action = styled.a`
  display: flex;
  background: white;
  text-decoration: none;
  align-items: center;
  justify-content: center;

  width: 100%;
  cursor: pointer;
  border: none;
  border-radius: 0;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 5px 0px,
    rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
  padding: 0.5em 0;
  color: #555;
  font-family: Roboto;
  font-weight: 300;
  font-size: 1.08em;
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

const Actions = ({data}) => (
  <Footer>
    {data.map(({type, url, title, detail, price}) => {
      switch (type) {
        case 'rsvp':
          return (
            <Link key={url} href={url}>
              RSVP: {title}
              {detail && <span>: {detail}</span>}
            </Link>
          )
        case 'ticket':
          return (
            <Link key={url} href={url}>
              Get Ticket: {title}
              {price && <span>&nbsp;- {price}</span>}
            </Link>
          )
      }

      return (
        <Link key={url} href={url}>
          {title}
        </Link>
      )
    })}
  </Footer>
)

export default Actions
