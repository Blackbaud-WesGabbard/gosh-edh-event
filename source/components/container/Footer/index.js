import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

import { Link } from 'react-router'

const Footer = ({ classNames }) => (
  <footer
    aria-label='Site Footer'
    role='contentinfo'
    className={classNames.root}
  >
    <Link to='/privacy'>Privacy</Link> <Link to='/terms'>Terms</Link>
  </footer>
)

export default withStyles(styles)(Footer)
