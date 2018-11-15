import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

import RichText from 'constructicon/rich-text'

const FormFooter = ({ children, classNames }) => (
  <footer className={classNames.footer}>
    <RichText>{children}</RichText>
  </footer>
)

export default withStyles(styles)(FormFooter)
