import moment from 'moment'
import * as validators from 'constructicon/lib/validators'

const customValidators = {
  inPast: msg => val => moment(val).isAfter() && msg
}

export default ({ user }) => ({
  fields: {
    name: {
      label: 'Name',
      type: 'text',
      disabled: true,
      initial: user.name
    },
    email: {
      label: 'Email',
      type: 'email',
      disabled: true,
      initial: user.email
    },
    phone: {
      label: 'Phone Number',
      type: 'text',
      initial: user.phone,
      validators: [
        validators.required('Please enter your phone number'),
        validators.greaterThan(6, 'Phone number is not long enough')
      ]
    },
    birthday: {
      label: 'Date of Birth',
      type: 'date',
      max: moment()
        .subtract(1, 'days')
        .format('YYYY-MM-DD'),
      initial: user.birthday,
      validators: [
        validators.required('Please enter your birthday'),
        customValidators.inPast('Birthday must be in the past')
      ]
    }
  }
})
