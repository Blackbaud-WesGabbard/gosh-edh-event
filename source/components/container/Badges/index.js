import React from 'react'
import Badge from './Badge'
import Grid from 'constructicon/grid'
import GridColumn from 'constructicon/grid-column'
import Heading from '../../ui/Heading'
import Section from 'constructicon/section'

const Badges = ({ items = [], page, status, title }) => (
  <Section background='light'>
    <Heading>{title}</Heading>
    <Grid justify='flex-start' spacing={0.5}>
      {items.map((item, index) => (
        <GridColumn key={index} xs={6} sm={4} md={3}>
          <Badge
            activeImage={item.activeImage}
            amount={item.amount}
            description={item.description}
            inactiveImage={item.inactiveImage}
            key={index}
            page={page}
            title={item.title}
            type={item.type}
          />
        </GridColumn>
      ))}
    </Grid>
  </Section>
)

export default Badges
