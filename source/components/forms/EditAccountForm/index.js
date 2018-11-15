import React from 'react'
import moment from 'moment'
import { compose } from 'redux'
import { connect } from 'react-redux'
import withForm from 'constructicon/with-form'
import form from './form'

import { setFlashMessage } from '../../../store/flashMessages'
import { updateUser } from '../../../store/session'

import Form from 'constructicon/form'
import InputField from 'constructicon/input-field'
import InputDate from 'constructicon/input-date'

const EditAccountForm = ({
  form,
  setFlashMessage,
  status,
  updateUser,
  user
}) => {
  const handleSubmit = e => {
    e.preventDefault()
    form
      .submit()
      .then(data => prepareUserData(data))
      .then(data => updateUser(data))
      .then(() => setFlashMessage('Your account has been updated'))
      .catch(() =>
        setFlashMessage('There was an error updating your page', true)
      )
  }

  const prepareUserData = data => ({
    birthday: moment(data.birthday).format('YYYY-MM-DD'),
    phone: data.phone,
    token: user.token
  })

  return (
    <Form
      icon={false}
      isDisabled={form.invalid}
      isLoading={status === 'fetching'}
      noValidate
      onSubmit={handleSubmit}
      submit='Update'
    >
      <InputField {...form.fields.name} />
      <InputField {...form.fields.email} />
      <InputField {...form.fields.phone} />
      <InputDate {...form.fields.birthday} />
    </Form>
  )
}

const mapStateToProps = ({ session: { user, status } }) => ({
  user,
  status
})

const mapDispatchToProps = {
  updateUser,
  setFlashMessage
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withForm(form)
)(EditAccountForm)
