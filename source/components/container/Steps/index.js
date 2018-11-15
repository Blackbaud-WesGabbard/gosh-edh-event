import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'
import Container from 'constructicon/container'
import Grid from 'constructicon/grid'
import GridColumn from 'constructicon/grid-column'

const Steps = ({ classNames, items = [], title }) => (
  <Container foreground='light' outerColor='grey' spacing={{ x: 1, y: 2 }}>
    <Grid spacing={1}>
      {items.map((item, index) => {
        const { description, icon = {} } = item

        return (
          <GridColumn key={index} xs={12} sm={6} md={3} xsAlign='center'>
            <img
              alt={description}
              className={classNames.image}
              src={icon.url}
            />
            <div>{description}</div>
          </GridColumn>
        )
      })}
    </Grid>
  </Container>
)

export default withStyles(styles)(Steps)
