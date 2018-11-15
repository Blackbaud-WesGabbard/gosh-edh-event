import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'
import unlessFetched from 'constructicon/lib/unlessFetched'
import { fetchContent } from '../../store/content'

import Meta from 'constructicon/meta'
import Page from '../../components/container/Page'

const About = ({ content = {}, status }) => (
  <Page status={status} heading={content.title} copy={content.copy}>
    <Meta {...content.meta} />
  </Page>
)

const hooks = {
  fetch: ({ dispatch, state: { content } }) =>
    Promise.all([
      unlessFetched(content.about, () => dispatch(fetchContent('about')))
    ])
}

const mapStateToProps = ({ content }) => ({
  content: content.about.data,
  status: content.about.status
})

export default compose(connect(mapStateToProps), provideHooks(hooks))(About)
