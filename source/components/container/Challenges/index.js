import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

import Grid from 'constructicon/grid'
import GridColumn from 'constructicon/grid-column'
import RichText from '../../ui/RichText'
import Section from 'constructicon/section'

const Challenges = ({ classNames, items = [], title }) => (
  <Section background='light'>
    {items.map((item, index) => {
      const { description, difficulty, title } = item

      return (
        <div className={classNames.root}>
          <Grid align='center' spacing={0.5}>
            <GridColumn xs={3}>{title}</GridColumn>
            <GridColumn xs={3}>Difficulty: {difficulty}</GridColumn>
            <GridColumn xs={6}>
              <RichText>{description}</RichText>
            </GridColumn>
          </Grid>
        </div>
      )
    })}
  </Section>
)

export default withStyles(styles)(Challenges)
