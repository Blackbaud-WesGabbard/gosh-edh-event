import React from 'react'
import numbro from 'numbro'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

import Avatar from '../../ui/Avatar'
import Metric from 'constructicon/metric'

const FundraiserProfile = ({ classNames, page, showEdit, styles }) => (
  <div className={classNames.root}>
    <div className={classNames.content}>
      <Avatar
        image={page.image}
        showEditAvatar={showEdit}
        styles={styles.avatar}
      />
      <Metric
        amount={numbro(page.raised).format('$0,0')}
        label='Raised'
        styles={styles.metric}
      />
      <Metric
        amount={numbro(page.fitness.total_in_meters / 1609.34).format('0,0')}
        label='Miles'
        styles={styles.metric}
      />
    </div>
  </div>
)

export default withStyles(styles)(FundraiserProfile)
