import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'
import { Link } from 'react-router'
import Icon from 'constructicon/icon'

const SupporterAvatar = ({
  classNames,
  image,
  isTeam,
  name,
  showEditAvatar,
  size
}) => (
  <div className={classNames.wrapper}>
    <img alt={name} className={classNames.image} src={image} />
    {showEditAvatar && (
      <Link
        className={classNames.edit}
        to={isTeam ? '/edit/team-avatar' : '/edit/avatar'}
      >
        <Icon name='edit' size={size} />
      </Link>
    )}
  </div>
)

SupporterAvatar.defaultProps = {
  size: 2
}

export default withStyles(styles)(SupporterAvatar)
