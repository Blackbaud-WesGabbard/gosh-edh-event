import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'
import Container from 'constructicon/container'
import RichText from '../../ui/RichText'

const MidBanner = ({ props, classNames, title, content }) => (
  <div className={classNames.root}>
    <Container spacing={{ x: 1, y: 1 }}>
      <div className={classNames.overlay}>
        <div className={classNames.title}>{title[0].text}</div>
        <RichText>{content}</RichText>
      </div>
    </Container>
  </div>
)

export default withStyles(styles)(MidBanner)
