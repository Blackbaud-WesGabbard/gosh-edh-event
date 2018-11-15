import React from 'react'
import moment from 'moment'
import numbro from 'numbro'
import withStyles from 'constructicon/with-styles'
import styles from './styles'
import { reply } from './icons'

import DonatorAvatar from '../FeedAvatar'
import Icon from 'constructicon/icon'
import Loading from 'constructicon/loading'

const FeedDonationCard = ({
  name,
  loading,
  fills,
  donation,
  thankYou,
  canReply,
  replying,
  styles,
  startReply,
  classNames
}) => (
  <div>
    <div className={classNames.donation}>
      <div className={classNames.donator}>
        <div className={classNames.avatarWrapper}>
          <DonatorAvatar
            iconColor={fills.icon}
            backgroundColor={fills.background}
          />
        </div>
        <div className={classNames.leftDonationText}>
          <div className={classNames.name}>{donation.name}</div>
          <div>
            <span className={classNames.amount}>
              Donated {numbro(donation.amount / 100).formatCurrency('0,0.00')}
            </span>
            <span className={classNames.date}>
              &mdash; {moment(donation.date).format('D MMM. YYYY')}
            </span>
          </div>
        </div>
      </div>
      <div className={classNames.message}>
        <div className={classNames.messageText}>{donation.message}</div>
      </div>
      {canReply &&
        !replying &&
        !loading && (
          <div onClick={startReply} className={classNames.reply}>
            <Icon viewBox={16} size={1.5} color='tertiary' paths={reply} />
          </div>
        )}
      {loading && <Loading spacing={0} />}
    </div>

    {donation.thankYou && (
      <div className={classNames.donation}>
        <div className={classNames.replySquare}>
          <Icon viewBox={16} size={1.5} color={fills.icon} paths={reply} />
        </div>

        <div className={`${classNames.thankYouContent} thankyou-content`}>
          <div className={classNames.donator}>
            <div className={classNames.pageAvatar} />
            <div className={classNames.leftThankYouText}>
              <div className={classNames.name}>{name}</div>
              <div>
                <span className={classNames.amount}>Replied</span>
                <span className={classNames.date}>
                  &mdash; {moment(donation.date).format('D MMM. YYYY')}
                </span>
              </div>
            </div>
          </div>

          <div className={classNames.message}>
            <div className={classNames.messageText}>{donation.thankYou}</div>
          </div>
        </div>
      </div>
    )}
  </div>
)

export default withStyles(styles)(FeedDonationCard)
