import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

import Progress from '../../ui/Progress'

const FundraiserStats = ({ classNames, page }) => (
  <div className={classNames.root}>
    <Progress raised={page.raised} target={page.target} />
  </div>
)

export default withStyles(styles)(FundraiserStats)
