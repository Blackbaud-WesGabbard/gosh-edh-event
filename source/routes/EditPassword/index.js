import React from 'react'
import { provideHooks } from 'redial'
import { fetchPage } from '../../store/session'

import EditPasswordForm from '../../components/forms/EditPasswordForm'
import Heading from 'constructicon/heading'

const EditPassword = () => (
  <div>
    <Heading>Password Reset</Heading>
    <EditPasswordForm />
  </div>
)

const hooks = {
  defer: ({ dispatch, state }) => dispatch(fetchPage(state.session.page))
}

export default provideHooks(hooks)(EditPassword)
