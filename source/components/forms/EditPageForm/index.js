import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import withStyles from 'constructicon/with-styles'
import withForm from 'constructicon/with-form'
import styles from './styles'
import form from './form'

import { setFlashMessage } from '../../../store/flashMessages'
import { updatePage } from '../../../store/session'

import Form from 'constructicon/form'
import InputField from 'constructicon/input-field'

const EditPageForm = ({
  classNames,
  form,
  page,
  setFlashMessage,
  status,
  styles,
  updatePage,
  user
}) => {
  const handleSubmit = e => {
    e.preventDefault()
    form
      .submit()
      .then(data => preparePageData(data))
      .then(data => updatePage(page.id, data))
      .then(() => setFlashMessage('Your page has been updated'))
      .catch(() =>
        setFlashMessage('There was an error updating your page', true)
      )
  }

  const preparePageData = data => ({
    name: data.name,
    story: data.story,
    target: data.target,
    token: user.token
  })

  return (
    <Form
      icon={false}
      isDisabled={form.invalid}
      isLoading={status === 'fetching'}
      noValidate
      onSubmit={handleSubmit}
      submit='Save Changes'
    >
      <InputField {...form.fields.name} />
      <InputField {...form.fields.target} />
      <InputField {...form.fields.story} styles={styles.textarea} />
    </Form>
  )
}

const mapStateToProps = ({ session: { user, page, status } }) => ({
  page,
  user,
  status
})

const mapDispatchToProps = {
  setFlashMessage,
  updatePage
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
  withForm(form)
)(EditPageForm)
