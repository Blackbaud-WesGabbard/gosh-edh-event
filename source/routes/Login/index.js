import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../store/session'

import FormFooter from '../../components/ui/FormFooter'
import { Link } from 'react-router'
import LoginForm from 'supporticon/components/login-form'
import Page from '../../components/container/Page'
import ProviderButtons from '../../components/ui/ProviderButtons'

class Login extends Component {
  componentWillMount () {
    this.redirectIfSignedIn(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.redirectIfSignedIn(nextProps)
  }

  redirectIfSignedIn (props) {
    const { router, user } = props

    if (user.token) {
      router.push('/pages/create')
    }
  }

  render () {
    return (
      <Page heading='Log in' width={24}>
        <ProviderButtons onSuccess={this.props.fetchUser} />
        <LoginForm
          clientId={process.env.API_CLIENT_ID}
          onSuccess={this.props.fetchUser}
          formComponent={{
            footer: (
              <FormFooter>
                <p>
                  <Link to='/reset-password'>Forgot password?</Link>
                </p>
                <p>
                  <Link to='/signup'>Need an account?</Link>
                </p>
              </FormFooter>
            )
          }}
        />
      </Page>
    )
  }
}

const mapStateToProps = ({ session: { user } }) => ({ user })

export default connect(mapStateToProps, { fetchUser })(Login)
