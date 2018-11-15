import React, { Component } from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'
import getFillsFromName from './fills.js'

import DonationCard from '../FeedDonationCard'
import ThankYouForm from '../FeedThankYouForm'

class SupporterFeedItem extends Component {
  constructor () {
    super(...arguments)

    this.state = {
      donation: this.props.donation,
      canReply: this.props.canReply,
      replying: false,
      loading: false,
      fills: getFillsFromName(this.props.donation.name)
    }

    this.startReply = this.startReply.bind(this)
    this.setLoading = this.setLoading.bind(this)
    this.setReply = this.setReply.bind(this)
    this.endReply = this.endReply.bind(this)
  }

  startReply () {
    this.setState({ replying: true })
  }

  setLoading (loading) {
    this.setState({ loading })
  }

  setReply (message) {
    let nextDonation = this.state.donation
    nextDonation.thankYou = message
    this.setState({
      donation: nextDonation,
      canReply: false
    })
  }

  endReply () {
    this.setState({ replying: false })
  }

  render () {
    const { classNames, name, image } = this.props

    const { donation, fills, replying, canReply, loading } = this.state

    return (
      <div className={classNames.root}>
        <DonationCard
          image={image}
          name={name}
          donation={donation}
          fills={fills}
          replying={replying}
          canReply={canReply}
          startReply={this.startReply}
          loading={loading}
        />
        {replying && (
          <ThankYouForm
            donationId={donation.id}
            setReply={this.setReply}
            setLoading={this.setLoading}
            name={donation.name}
            endReply={this.endReply}
          />
        )}
      </div>
    )
  }
}

export default withStyles(styles)(SupporterFeedItem)
