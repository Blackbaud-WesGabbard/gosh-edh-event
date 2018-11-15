import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'
import {
  fetchSupporterPage,
  fetchSupporterPageDonations
} from '../../store/pages'
import { doesPageBelongToUser } from '../../lib/auth'
import { fetchContent } from '../../store/content'
import unlessFetched from 'constructicon/lib/unlessFetched'

import Badges from '../../components/container/Badges'
import Banner from '../../components/ui/Banner'
import Challenges from '../../components/container/Challenges'
import Container from 'constructicon/container'
import FundraiserCTAs from '../../components/container/FundraiserCTAs'
import FundraiserProfile from '../../components/container/FundraiserProfile'
import FundraiserStats from '../../components/container/FundraiserStats'
import Grid from 'constructicon/grid'
import GridColumn from 'constructicon/grid-column'
import Helmet from 'react-helmet'
import PageContentStatus from '../../components/container/PageContentStatus'

const Page = ({ content = {}, classNames, page = {}, isPageOwner, styles }) => (
  <PageContentStatus status={page.status}>
    <Helmet>
      <title>{`${page.name} - Shelter Virtual Event`}</title>
    </Helmet>
    <Banner {...content.hero} />
    <FundraiserCTAs page={page} showEdit={isPageOwner} />
    <Container outerColor='lightGrey' spacing={1}>
      <Grid spacing={1}>
        <GridColumn md={4}>
          <FundraiserProfile page={page} showEdit={isPageOwner} />
        </GridColumn>
        <GridColumn md={8}>
          <FundraiserStats page={page} />
        </GridColumn>
        <GridColumn>
          <Badges {...content.badges} page={page} />
        </GridColumn>
        <GridColumn>
          <Challenges {...content.challenges} />
        </GridColumn>
      </Grid>
    </Container>
  </PageContentStatus>
)

const hooks = {
  fetch: ({ dispatch, state, params }) =>
    Promise.all([
      dispatch(fetchSupporterPage(params)).then(page =>
        dispatch(fetchSupporterPageDonations(page))
      ),
      unlessFetched(state.content.fundraiser, () =>
        dispatch(fetchContent('fundraiser'))
      )
    ])
}

const mapStateToProps = ({ content, pages, session: { user } }, { params }) => {
  const page = pages[params.slug]

  return {
    content: content.fundraiser.data,
    page,
    isPageOwner: doesPageBelongToUser(page, user)
  }
}

export default compose(connect(mapStateToProps), provideHooks(hooks))(Page)
