import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'
import unlessFetched from 'constructicon/lib/unlessFetched'
import { fetchContent } from '../../store/content'

import Accordion from 'constructicon/accordion'
import Meta from 'constructicon/meta'
import Page from '../../components/container/Page'
import RichText from '../../components/ui/RichText'

const FAQs = ({ content = {}, questions = [], status }) => (
  <Page status={status} heading={content.title} copy={content.copy}>
    <Meta {...content.meta} />
    {questions.map(({ question, answer }, i) => (
      <Accordion title={question}>
        <RichText>{answer}</RichText>
      </Accordion>
    ))}
  </Page>
)

const hooks = {
  fetch: ({ dispatch, state: { content } }) =>
    Promise.all([
      unlessFetched(content.faqs, () => dispatch(fetchContent('faqs')))
    ])
}

const mapStateToProps = ({ content }) => ({
  content: content.faqs.data,
  questions: content.faqs.data ? content.faqs.data.questions : [],
  status: content.faqs.status
})

export default compose(connect(mapStateToProps), provideHooks(hooks))(FAQs)
