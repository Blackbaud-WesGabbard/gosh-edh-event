import React from 'react'

import Grid from 'constructicon/grid'
import GridColumn from 'constructicon/grid-column'
import ProviderOauthButton from 'supporticon/components/provider-oauth-button'
import Section from 'constructicon/section'

const ProviderButtons = ({ onSuccess }) => (
  <Section spacing={0} margin={{ x: 0, y: 1 }}>
    <Grid spacing={0.25}>
      {['Facebook', 'Map My Fitness', 'Strava'].map(provider => (
        <GridColumn key={provider} md={4}>
          <ProviderOauthButton
            block
            provider={provider.toLowerCase().replace(/ /g, '')}
            label={provider}
            clientId={process.env.API_CLIENT_ID}
            redirectUri={process.env.API_REDIRECT_URI}
            onSuccess={data => onSuccess({ token: data.access_token })}
            size={-1}
          />
        </GridColumn>
      ))}
    </Grid>
  </Section>
)

export default ProviderButtons
