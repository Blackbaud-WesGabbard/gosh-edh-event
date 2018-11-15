import React from 'react'
import BaseHeading from 'constructicon/heading'
import { PrismicRichText } from 'prismic-utils'

const Heading = ({ children, ...props }) =>
  children ? (
    <BaseHeading tag='div' {...props}>
      {typeof children === 'object' ? (
        <PrismicRichText>{children}</PrismicRichText>
      ) : (
        children
      )}
    </BaseHeading>
  ) : null

export default Heading
