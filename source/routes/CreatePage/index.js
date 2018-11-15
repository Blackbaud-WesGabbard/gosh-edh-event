import React, { Component } from 'react'
import { compose } from 'redux'
import { provideHooks } from 'redial'
import { connect } from 'react-redux'
import unlessFetched from 'constructicon/lib/unlessFetched'
import { fetchPage, fetchUserPage } from '../../store/session'

import FormFooter from '../../components/ui/FormFooter'
import CreatePageForm from 'supporticon/components/create-page-form'
import Page from '../../components/container/Page'

class CreatePage extends Component {
  componentWillMount () {
    this.ensureLoggedIn(this.props)
    this.checkIfPageExists(this.props)
  }

  componentWillReceiveProps (props) {
    this.ensureLoggedIn(props)
    this.checkIfPageExists(props)
  }

  ensureLoggedIn (props) {
    const { router, user } = props

    if (!user.token) {
      router.push('/login')
    }
  }

  checkIfPageExists (props) {
    const { page, router } = props

    if (page.id) {
      router.push(`/pages/${page.slug}`)
    }
  }

  render () {
    const { fetchPage, user, status } = this.props

    return (
      <Page heading='Create your page' width={24} status={status}>
        <CreatePageForm
          campaignId={process.env.CAMPAIGN_UID}
          country={process.env.COUNTRY_CODE}
          clientId={process.env.API_CLIENT_ID}
          token={user.token}
          onSuccess={fetchPage}
          formComponent={{
            submit: 'Create Page',
            footer: (
              <FormFooter>
                <small>
                  By clicking <em>Create Page</em> above you are agreeing to
                  Everydayhero's{' '}
                  <a href='https://everydayhero.com/uk/terms/' target='_blank'>
                    Terms and Conditions
                  </a>{' '}
                  and{' '}
                  <a
                    href='https://everydayhero.com/uk/terms/privacy'
                    target='_blank'
                  >
                    Privacy Policy
                  </a>.
                </small>
              </FormFooter>
            )
          }}
        />
      </Page>
    )
  }
}

const hooks = {
  fetch: ({ dispatch, state: { session } }) =>
    unlessFetched(session.page, () => dispatch(fetchUserPage(session.user)))
}

const mapStateToProps = ({ session: { page, user, status } }) => ({
  page,
  user,
  status
})

export default compose(
  connect(mapStateToProps, { fetchPage }),
  provideHooks(hooks)
)(CreatePage)
