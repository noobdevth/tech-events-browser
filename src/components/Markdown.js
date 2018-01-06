import styled from 'react-emotion'
import Markdown from 'react-markdown'

const MarkdownView = styled(Markdown)`
  blockquote,
  ul,
  p {
    margin: 0;
  }

  ul,
  p:not(:last-child) {
    margin-bottom: 1em;
  }
`

export default MarkdownView
