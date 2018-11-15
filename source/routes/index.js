import React from 'react'
import { IndexRoute, Route, IndexRedirect } from 'react-router'

import About from './About'
import CreatePage from './CreatePage'
import Edit from './Edit'
import EditAccount from './EditAccount'
import EditAvatar from './EditAvatar'
import EditPage from './EditPage'
import EditPassword from './EditPassword'
import Error from './Error'
import FAQs from './FAQs'
import Home from './Home'
import Login from './Login'
import NotFound from './NotFound'
import Page from './Page'
import Privacy from './Privacy'
import ResetPassword from './ResetPassword'
import Root from './Root'
import Signup from './Signup'

export default (
  <Route path='/' component={Root}>
    <IndexRoute component={Home} />
    <Route path='about' component={About} />
    <Route path='faqs' component={FAQs} />
    <Route path='login' component={Login} />
    <Route path='privacy' component={Privacy} />
    <Route path='reset-password' component={ResetPassword} />
    <Route path='signup' component={Signup} />
    <Route path='pages'>
      <Route path='create' component={CreatePage} />
      <Route path=':slug' component={Page} />
    </Route>
    <Route path='edit' component={Edit}>
      <IndexRedirect to='page' />
      <Route path='page' component={EditPage} />
      <Route path='avatar' component={EditAvatar} />
      <Route path='account' component={EditAccount} />
      <Route path='password' component={EditPassword} />
    </Route>
    <Route path='500' component={Error} />
    <Route path='404' component={NotFound} />
    <Route path='*' component={NotFound} />
  </Route>
)
