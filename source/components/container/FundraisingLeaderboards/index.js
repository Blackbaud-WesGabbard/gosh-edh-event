import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

import Container from 'constructicon/container'
import Grid from 'constructicon/grid'
import GridColumn from 'constructicon/grid-column'
import Heading from 'constructicon/heading'
import Leaderboard from 'supporticon/components/leaderboard'

const FundraisingLeaderboards = () => (
  <Container spacing={{ x: 1, y: 1 }}>
    <Heading>Fundraising Leaderboards</Heading>
    <Grid spacing={1}>
      <GridColumn md={6}>
        <Heading>Individuals</Heading>
        <Leaderboard
          campaign={process.env.CAMPAIGN_UID}
          filter={false}
          limit={10}
          type='individual'
        />
      </GridColumn>
      <GridColumn md={6}>
        <Heading>Teams</Heading>
        <Leaderboard
          campaign={process.env.CAMPAIGN_UID}
          filter={false}
          limit={10}
          type='team'
        />
      </GridColumn>
    </Grid>
  </Container>
)

export default withStyles(styles)(FundraisingLeaderboards)
