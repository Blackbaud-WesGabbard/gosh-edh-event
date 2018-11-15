import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../store/session'

import FormFooter from '../../components/ui/FormFooter'
import { Link } from 'react-router'
import SignupForm from 'supporticon/components/signup-form'
import Page from '../../components/container/Page'
import ProviderButtons from '../../components/ui/ProviderButtons'

class Signup extends Component {
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
      <Page heading='Sign up' width={24}>
        <ProviderButtons onSuccess={this.props.fetchUser} />
        <SignupForm
          country={process.env.COUNTRY_CODE}
          clientId={process.env.API_CLIENT_ID}
          onSuccess={this.props.fetchUser}
          formComponent={{
            footer: (
              <FormFooter>
                <Link to='/login'>Already have an account?</Link>
              </FormFooter>
            )
          }}
        />
      </Page>
    )
  }
}

const mapStateToProps = ({ session: { user } }) => ({ user })

export default connect(mapStateToProps, { fetchUser })(Signup)
