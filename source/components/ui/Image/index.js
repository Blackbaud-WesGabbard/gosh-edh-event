import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

const Image = ({ classNames, image = {} }) => {
  switch (typeof image) {
    case 'string':
      return <img alt='Image' src={image} className={classNames.root} />
    case 'object':
      return <img alt={image.alt} className={classNames.root} src={image.url} />
    default:
      return null
  }
}

export default withStyles(styles)(Image)
