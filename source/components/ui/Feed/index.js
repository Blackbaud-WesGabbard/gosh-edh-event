import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

import Button from 'constructicon/button'
import ButtonGroup from 'constructicon/button-group'
import Container from 'constructicon/container'
import Heading from 'constructicon/heading'
import Pagination from '../Pagination'
import FeedItem from './FeedItem'

const SupporterFeed = ({
  classNames,
  styles,
  currentUsersPage,
  page: { donations = [], image, name, donationUrl }
}) => (
  <Container width={35}>
    <Heading>Donations</Heading>
    {donations.length > 0 && (
      <Pagination max={4} toPaginate={donations}>
        {paginated => (
          <div>
            {paginated.currentPage.map((donation, index) => (
              <FeedItem
                image={image}
                name={name}
                canReply={currentUsersPage && !donation.thankYou}
                donation={donation}
                index={index}
                key={donation.name + donation.amount + index}
              />
            ))}
            {paginated.isPaginated && (
              <ButtonGroup styles={styles.buttonGroup}>
                <Button
                  onClick={paginated.prev}
                  background='tertiary'
                  styles={{
                    opacity: paginated.canPrev ? '1' : '0.5',
                    cursor: paginated.canPrev ? 'pointer' : 'initial'
                  }}
                >
                  Prev
                </Button>
                <Button
                  onClick={paginated.next}
                  background='tertiary'
                  styles={{
                    opacity: paginated.canNext ? '1' : '0.5',
                    cursor: paginated.canNext ? 'pointer' : 'initial'
                  }}
                >
                  Next
                </Button>
              </ButtonGroup>
            )}
          </div>
        )}
      </Pagination>
    )}

    {donations.length === 0 && (
      <div className={classNames.donate}>
        <div>No one has donated to {name} yet</div>
        <Button href={donationUrl} tag='a' target='_blank'>
          Donate to {name}
        </Button>
      </div>
    )}
  </Container>
)

export default withStyles(styles)(SupporterFeed)
