import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

import Heading from '../../../ui/Heading'
import RichText from '../../../ui/RichText'

const Badge = ({
  activeImage = {},
  amount,
  classNames,
  description,
  inactiveImage = {},
  page = {},
  styles,
  type,
  title
}) => {
  const isBadgeAchieved = () => {
    switch (type) {
      case 'Fundraising Percentage':
        return page.raised / page.target * 100 >= amount
      case 'Fitness Amount':
        return page.fitness.total_in_meters >= amount
      case 'Fitness Percentage':
        return page.fitness.progress >= amount
      default:
        return page.raised >= amount
    }
  }

  return (
    <div className={classNames.root}>
      <img
        alt={title}
        className={classNames.badge}
        src={isBadgeAchieved() ? activeImage.url : inactiveImage.url}
      />
      <Heading styles={styles.title}>{title}</Heading>
      <RichText>{description}</RichText>
    </div>
  )
}

export default withStyles(styles)(Badge)
