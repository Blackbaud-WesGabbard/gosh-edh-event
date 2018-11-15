import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

import Container from 'constructicon/container'
import Grid from 'constructicon/grid'
import GridColumn from 'constructicon/grid-column'
import Heading from 'constructicon/heading'
import FitnessLeaderboard from 'supporticon/components/fitness-leaderboard'

const FitnessLeaderboards = () => (
  <Container spacing={{ x: 1, y: 1 }}>
    <Heading>Fitness Leaderboards</Heading>
    <Grid spacing={1}>
      <GridColumn md={6}>
        <Heading>Individuals</Heading>
        <FitnessLeaderboard
          campaign={process.env.CAMPAIGN_UID}
          filter={false}
          limit={10}
          type='individual'
        />
      </GridColumn>
      <GridColumn md={6}>
        <Heading>Teams</Heading>
        <FitnessLeaderboard
          campaign={process.env.CAMPAIGN_UID}
          filter={false}
          limit={10}
          type='team'
        />
      </GridColumn>
    </Grid>
  </Container>
)

export default withStyles(styles)(FitnessLeaderboards)
