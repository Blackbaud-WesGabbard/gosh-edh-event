import React, { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { renderServerCSS } from 'constructicon/lib/css'

import Helmet from 'react-helmet'

export const Document = ({
  head,
  content,
  state = {},
  styles = ['/main.css'],
  scripts = ['/main.js'],
  itemType = 'http://schema.org/WebSite'
}) => (
  <html itemScope itemType={itemType}>
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <meta name='CnvHeaderVersion' content='v5.0' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      {head.title.toComponent()}
      {head.meta.toComponent()}
      {head.link.toComponent()}
      {head.script.toComponent()}
      {head.style.toComponent()}
      {styles.map((style, index) => (
        <link key={index} rel='stylesheet' href={style} />
      ))}
      {renderServerCSS()}

      <script
        type='text/javascript'
        src='//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/1.0.10/cookieconsent.min.js'
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.cookieconsent_options = {"message":"ABOUT COOKIES: We use cookies to help make this website better, to improve our services and for advertising purposes. You can learn more about our use of cookies and change your browser settings in order to avoid cookies by clicking the More Info link. Otherwise, we’ll assume you are OK to continue.","dismiss":"Continue","learnMore":"More Info","link":"https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/cookies-policy/","theme":"light-bottom"};`
        }}
      />
    </head>
    <body>
      <main id='mount' dangerouslySetInnerHTML={{ __html: content }} />
      <script
        id='initial-state'
        type='application/json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(state) }}
      />
      {scripts.map((script, index) => <script key={index} src={script} />)}
      <script
        type='text/javascript'
        src='//static.filestackapi.com/v3/filestack-0.11.1.js'
      />
    </body>
  </html>
)

export const renderDocument = ({
  assets,
  content,
  state = {},
  DocumentComponent = Document
}) => {
  const styles = assets.filter(asset => asset.match(/\.css$/))
  const scripts = assets.filter(asset => asset.match(/\.js$/))
  return (
    '<!doctype html>' +
    renderToStaticMarkup(
      createElement(DocumentComponent, {
        head: Helmet.rewind(),
        styles,
        scripts,
        content,
        state
      })
    )
  )
}

export default renderDocument
