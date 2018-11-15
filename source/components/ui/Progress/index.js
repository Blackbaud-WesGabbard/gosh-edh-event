import React from 'react'
import numbro from 'numbro'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

import Grid from 'constructicon/grid'
import GridColumn from 'constructicon/grid-column'
import Metric from 'constructicon/metric'
import ProgressBar from 'constructicon/progress-bar'

const SupporterProgress = ({ classNames, raised, styles, target }) => (
  <div className={classNames.root}>
    <Grid>
      <GridColumn xs={6} xsAlign='left'>
        <Metric
          styles={styles.metric}
          label='Raised'
          amount={numbro(raised / 100).formatCurrency('0,0.00')}
        />
      </GridColumn>
      <GridColumn xs={6} xsAlign='right'>
        <Metric
          styles={styles.metric}
          label='Goal'
          amount={numbro(target / 100).formatCurrency('0,0.00')}
        />
      </GridColumn>
    </Grid>

    <ProgressBar alt='Progress bar' progress={raised / target * 100} />
  </div>
)

export default withStyles(styles)(SupporterProgress)
