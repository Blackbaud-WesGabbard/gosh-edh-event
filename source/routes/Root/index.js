import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'
import unlessFetched from 'constructicon/lib/unlessFetched'
import * as traits from '../../lib/traits'
import { fetchContent } from '../../store/content'

import FlashMessages from '../../components/ui/FlashMessages'
import Footer from '../../components/container/Footer'
import Header from '../../components/container/Header'
import Helmet from 'react-helmet'
import Meta from 'constructicon/meta'
import PageContentStatus from '../../components/container/PageContentStatus'
import TraitsProvider from 'constructicon/traits-provider'

const SiteContainer = ({
  analytics,
  children,
  content = {},
  location,
  status
}) => (
  <TraitsProvider traits={traits}>
    <PageContentStatus status={status}>
      <Meta {...content.meta} />
      <Helmet>
        {!analytics.optout &&
          typeof window !== 'undefined' && (
            <script>
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PN6K34');`}
            </script>
          )}
      </Helmet>
      <FlashMessages />
      <Header {...content.header} />
      {children}
      <Footer />
    </PageContentStatus>
  </TraitsProvider>
)

const hooks = {
  fetch: ({ dispatch, state: { content } }) =>
    Promise.all([
      unlessFetched(content.config, () => dispatch(fetchContent('config')))
    ])
}

const mapStateToProps = ({ analytics, content }) => ({
  analytics,
  content: content.config.data,
  status: content.config.status
})

export default compose(connect(mapStateToProps), provideHooks(hooks))(
  SiteContainer
)
