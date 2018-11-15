import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setFlashMessage } from '../../../store/flashMessages'
import { resetPassword } from 'supporticon/api/authentication'

import Form from 'constructicon/form'
import RichText from 'constructicon/rich-text'

class EditPassword extends Component {
  constructor () {
    super()
    this.state = { status: null }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    const { setFlashMessage, user } = this.props

    const data = {
      clientId: process.env.API_CLIENT_ID,
      email: user.email
    }

    return Promise.resolve()
      .then(() => this.setState({ status: 'fetching' }))
      .then(() => resetPassword(data))
      .then(() => this.setState({ status: 'fetched' }))
      .then(() => setFlashMessage('Password reset email sent'))
      .catch(error => {
        this.setState({ status: 'failed' })
        setFlashMessage('There was an unexpected error', true)
        return Promise.reject(error)
      })
  }

  render () {
    return (
      <div>
        <RichText>
          <p>
            To reset your password, simply click below and we will send you an
            email with instructions on the steps to take.
          </p>
        </RichText>
        <Form
          icon={false}
          isLoading={this.state.status === 'fetching'}
          noValidate
          onSubmit={this.handleClick}
          submit='Send Password Reset Instructions'
        />
      </div>
    )
  }
}

const mapStateToProps = ({ session: { user } }) => ({ user })
const mapDispatchToProps = { setFlashMessage }

export default connect(mapStateToProps, mapDispatchToProps)(EditPassword)
