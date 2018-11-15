import React from 'react'
// import { compose } from 'redux'
import styles from './styles'
import withStyles from 'constructicon/with-styles'
import Modal from 'constructicon/modal'

const FlatModal = ({ styles, ...props }) => (
  <Modal styles={styles.root} spacing={0} {...props} />
)

export default withStyles(styles)(FlatModal)
