import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setFlashMessage } from '../../store/flashMessages'

import Grid from 'constructicon/grid'
import GridColumn from 'constructicon/grid-column'
import NavLinks from './NavLinks'
import Page from '../../components/container/Page'

class Edit extends Component {
  componentDidMount () {
    this.ensureLoggedIn(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.ensureLoggedIn(nextProps)
  }

  ensureLoggedIn (props) {
    const { router, setFlashMessage, page, user } = props

    if (!this.isLoggedIn(user, page)) {
      setFlashMessage('You need to be logged in to edit your details', true)
      router.push('/login')
    }
  }

  isLoggedIn (user, page) {
    return user.token && page.id
  }

  render () {
    const { children, page, status } = this.props

    return (
      <Page status={status} width={40}>
        <Grid spacing={1}>
          <GridColumn md={4} lg={3}>
            <NavLinks page={page} />
          </GridColumn>
          <GridColumn md={8} lg={9}>
            {children}
          </GridColumn>
        </Grid>
      </Page>
    )
  }
}

const mapStateToProps = ({ session: { page, user, status } }) => ({
  user,
  page,
  status
})

const mapDispatchToProps = { setFlashMessage }

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
