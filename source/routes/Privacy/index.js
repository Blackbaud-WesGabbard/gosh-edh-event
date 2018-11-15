import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'
import unlessFetched from 'constructicon/lib/unlessFetched'
import { fetchContent } from '../../store/content'
import { optin, optout } from '../../store/analytics'

import Button from 'constructicon/button'
import Meta from 'constructicon/meta'
import Page from '../../components/container/Page'
import RichText from 'constructicon/rich-text'

const Privacy = ({ analytics, optin, optout, content = {}, status }) => (
  <Page status={status} heading={content.title} copy={content.copy}>
    <Meta {...content.meta} />
    {analytics.optout ? (
      <RichText>
        <p>You are currently opted out to tracking</p>
        <Button onClick={optin}>Opt In to Tracking</Button>
      </RichText>
    ) : (
      <RichText>
        <p>You are currently opted in to tracking</p>
        <Button onClick={optout}>Opt Out of Tracking</Button>
      </RichText>
    )}
  </Page>
)

const hooks = {
  fetch: ({ dispatch, state: { content } }) =>
    Promise.all([
      unlessFetched(content.privacy, () => dispatch(fetchContent('privacy')))
    ])
}

const mapStateToProps = ({ analytics, content }) => ({
  analytics,
  content: content.privacy.data,
  status: content.privacy.status
})

const mapDispatchToProps = { optin, optout }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  provideHooks(hooks)
)(Privacy)
