import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'
import { fetchPage } from '../../store/session'

import Heading from 'constructicon/heading'
import EditPageForm from '../../components/forms/EditPageForm'
import PageContentStatus from '../../components/container/PageContentStatus'

const EditPage = ({ page, status }) => (
  <PageContentStatus status={status}>
    <Heading>Fundraising Page</Heading>
    <EditPageForm />
  </PageContentStatus>
)

const hooks = {
  defer: ({ dispatch, state }) => dispatch(fetchPage(state.session.page))
}

const mapStateToProps = ({ session: { page, status } }) => ({
  page,
  status
})

export default compose(provideHooks(hooks), connect(mapStateToProps))(EditPage)
