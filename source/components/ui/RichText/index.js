import React from 'react'
import { prismicRichTextAsHTML } from 'prismic-utils'
import BaseRichText from 'constructicon/rich-text'

const RichText = ({ children, styles, ...props }) => {
  const html =
    typeof children === 'object' ? prismicRichTextAsHTML(children) : children

  return children ? <BaseRichText {...props}>{html}</BaseRichText> : null
}

export default RichText
