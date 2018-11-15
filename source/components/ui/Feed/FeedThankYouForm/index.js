import React, { Component } from 'react'
import axios from 'axios'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import withStyles from 'constructicon/with-styles'
import styles, { keyframes } from './styles'

import Button from 'constructicon/button'
import ButtonGroup from 'constructicon/button-group'
import Icon from 'constructicon/icon'

class SupporterFeedThankYouForm extends Component {
  constructor () {
    super(...arguments)

    this.state = { message: '' }

    this.checkIfEsc = this.checkIfEsc.bind(this)
    this.onMessageChange = this.onMessageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  checkIfEsc (event) {
    if (event.keyCode === 27) {
      this.props.endReply()
    }
  }

  onMessageChange (event) {
    this.setState({ message: event.target.value })
  }

  handleSubmit () {
    const { endReply, setLoading, setReply } = this.props
    const { message } = this.state

    if (message !== '') {
      Promise.resolve()
        .then(() => endReply())
        .then(() => setLoading(true))
        .then(() => this.sendRequest())
        .then(() => setReply(message))
        .then(() => setLoading(false))
        .catch(err => {
          setLoading(false)
          console.log(err)
        })
    }
  }

  handleClose () {
    this.props.endReply()
  }

  sendRequest () {
    const { params, token, donationId } = this.props

    const base = process.env.SUPPORTER_URL
    const url = `${base}/api/v2/pages/${
      params.id
    }/donations/${donationId}/comments`

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${token}`
      },
      data: { caption: this.state.message },
      url
    }

    return axios(options)
      .then(resp => console.log(resp))
      .catch(e => e)
  }

  render () {
    const { classNames, styles } = this.props
    const { message } = this.state

    const buttonStyles = message === '' ? styles.disabled : styles.submit

    return (
      <div className={classNames.replying}>
        <label className={classNames.label}>Thank you message</label>
        <input
          autoFocus
          className={classNames.input}
          value={message}
          onChange={this.onMessageChange}
          onKeyDown={this.checkIfEsc}
        />
        <ButtonGroup spacing={0.25} styles={styles.buttonGroup}>
          <Button onClick={this.handleSubmit} styles={buttonStyles}>
            Submit
          </Button>
          <Button
            styles={styles.close}
            spacing={0.5}
            background='transparent'
            onClick={this.handleClose}
          >
            <Icon color='#242425' name='close' />
          </Button>
        </ButtonGroup>
      </div>
    )
  }
}

const mapState = ({ session }) => ({
  token: session.token
})

export default compose(
  connect(mapState),
  withRouter,
  withStyles(styles, keyframes)
)(SupporterFeedThankYouForm)
