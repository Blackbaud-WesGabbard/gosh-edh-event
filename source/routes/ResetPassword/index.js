import React from 'react'
import withToggle from 'constructicon/with-toggle'

import FormFooter from '../../components/ui/FormFooter'
import { Link } from 'react-router'
import ResetPasswordForm from 'supporticon/components/reset-password-form'
import Page from '../../components/container/Page'

const ResetPassword = ({ onToggleOn, toggled }) => (
  <Page heading='Reset Password' width={24}>
    {toggled ? (
      <div>
        <p>
          If an account exists with the email you provided, we have sent you
          instructions to reset your password.
        </p>
        <p>
          <Link to='/login'>Log in</Link>
        </p>
      </div>
    ) : (
      <ResetPasswordForm
        clientId={process.env.API_CLIENT_ID}
        onSuccess={onToggleOn}
        formComponent={{
          footer: (
            <FormFooter>
              <Link to='/signup'>Don't have an account?</Link>
            </FormFooter>
          )
        }}
      />
    )}
  </Page>
)

export default withToggle(ResetPassword)
