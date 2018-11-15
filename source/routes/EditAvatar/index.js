import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'
import { fetchPage } from '../../store/session'

import EditProfilePictureForm from '../../components/forms/EditProfilePictureForm'
import Heading from 'constructicon/heading'
import PageContentStatus from '../../components/container/PageContentStatus'

const EditProfilePicture = ({ page, status }) => (
  <PageContentStatus status={status}>
    <Heading>Profile Picture</Heading>
    <EditProfilePictureForm pageID={page.id} />
  </PageContentStatus>
)

const hooks = {
  defer: ({ dispatch, state }) => dispatch(fetchPage(state.session.page))
}

const mapStateToProps = ({ session: { page, status } }) => ({
  page,
  status
})

export default compose(provideHooks(hooks), connect(mapStateToProps))(
  EditProfilePicture
)
