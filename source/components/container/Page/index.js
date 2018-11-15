import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

import Container from 'constructicon/container'
import Heading from '../../ui/Heading'
import PageContentStatus from '../PageContentStatus'
import RichText from '../../ui/RichText'

const Page = ({ children, copy, heading, status, styles, ...props }) => (
  <PageContentStatus status={status}>
    <Container spacing={1} styles={styles.container} {...props}>
      <Heading tag='h1' styles={styles.heading}>
        {heading}
      </Heading>
      <RichText styles={styles.copy}>{copy}</RichText>
      {children}
    </Container>
  </PageContentStatus>
)

Page.defaultProps = {
  spacing: { x: 1, y: 2 },
  status: 'fetched',
  width: 30
}

export default withStyles(styles)(Page)
