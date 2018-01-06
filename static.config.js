import React, {Component} from 'react'
import {extractCritical} from 'emotion-server'
import OfflinePlugin from 'offline-plugin'

export const siteRoot = 'https://thai-tech-events.firebaseapp.com'

// <meta property="og:image" content={siteRoot} />

class Document extends Component {
  render() {
    const {Html, Head, Body, children, renderMeta} = this.props

    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style dangerouslySetInnerHTML={{__html: renderMeta.css}} />
          <title>Tech Events Browser</title>
          <meta
            name="description"
            content="Discover the Tech Events in Thailand"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400"
            rel="stylesheet"
          />
        </Head>
        <Body>{children}</Body>
      </Html>
    )
  }
}

export default {
  siteRoot,
  webpack: (config, args) => {
    config.plugins.push(new OfflinePlugin())
    return config
  },
  getSiteProps: () => ({
    title: 'just Do It',
    siteRoot,
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/routes/index',
    },
    {
      is404: true,
      component: 'src/routes/404',
    },
  ],
  renderToHtml: (render, Comp, meta) => {
    const html = render(<Comp />)
    meta.css = extractCritical(html).css
    return html
  },
  Document,
}
