import React from 'react'
import { provideHooks } from 'redial'
import { fetchPage } from '../../store/session'

import EditAccountForm from '../../components/forms/EditAccountForm'
import Heading from 'constructicon/heading'

const EditAccount = () => (
  <div>
    <Heading>Account</Heading>
    <EditAccountForm />
  </div>
)

const hooks = {
  defer: ({ dispatch, state }) => dispatch(fetchPage(state.session.page))
}

export default provideHooks(hooks)(EditAccount)
