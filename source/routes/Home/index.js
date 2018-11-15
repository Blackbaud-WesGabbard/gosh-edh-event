import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'
import unlessFetched from 'constructicon/lib/unlessFetched'
import { fetchContent } from '../../store/content'

import FitnessLeaderboards from '../../components/container/FitnessLeaderboards'
import FundraisingLeaderboards from '../../components/container/FundraisingLeaderboards'
import HomeBanner from '../../components/container/HomeBanner'
import Meta from 'constructicon/meta'
import PageContentStatus from '../../components/container/PageContentStatus'

import Steps from '../../components/container/Steps'
import SocialFeed from '../../components/container/SocialFeed'

const Home = ({ content = {}, status }) => (
  <PageContentStatus status={status}>
    <Meta {...content.meta} />
    <HomeBanner {...content.banner} />
    <Steps {...content.steps} />
    <FundraisingLeaderboards />
    <FitnessLeaderboards />
    <SocialFeed />
  </PageContentStatus>
)

const hooks = {
  fetch: ({ dispatch, state: { content } }) =>
    Promise.all([
      unlessFetched(content.home, () => dispatch(fetchContent('home')))
    ])
}

const mapStateToProps = ({ content }) => ({
  content: content.home.data,
  status: content.home.status
})

export default compose(connect(mapStateToProps), provideHooks(hooks))(Home)
