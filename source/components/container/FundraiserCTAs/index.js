import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

import ButtonGroup from 'constructicon/button-group'
import Button from 'constructicon/button'
import Container from 'constructicon/container'
import { Link } from 'react-router'

const FundraiserCTAs = ({ classNames, page, showEdit }) => (
  <div className={classNames.root}>
    <Container spacing={{ x: 1, y: 0.5 }}>
      <ButtonGroup>
        <Button href={page.donationUrl} size={1} tag='a' target='_blank'>
          Donate {!showEdit && `to ${page.name}`}
        </Button>
        {showEdit && (
          <Button background='tertiary' size={1} to='/edit' tag={Link}>
            Edit page
          </Button>
        )}
      </ButtonGroup>
    </Container>
  </div>
)

export default withStyles(styles)(FundraiserCTAs)
