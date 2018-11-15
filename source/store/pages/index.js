import { fetchPage, deserializePage } from 'supporticon/api/pages'
import { fetchDonationFeed, deserializeDonation } from 'supporticon/api/feeds'

export const c = {
  FETCH: 'app/pages/FETCH',
  FETCH_SUCCESS: 'app/pages/FETCH_SUCCESS',
  FETCH_FAILURE: 'app/pages/FETCH_FAILURE',
  FETCH_DONATIONS: 'app/supporterPage/FETCH_DONATIONS',
  FETCH_DONATIONS_SUCCESS: 'app/supporterPage/FETCH_DONATIONS_SUCCESS',
  FETCH_DONATIONS_FAILURE: 'app/supporterPage/FETCH_DONATIONS_FAILURE'
}

const doesPageBelongToCampaign = page => {
  if (page.campaign_id !== process.env.CAMPAIGN_UUID) {
    throw new Error('Page is not part of the campaign')
  }

  return page
}

export const fetchSupporterPage = ({ slug }) => dispatch =>
  Promise.resolve()
    .then(() => dispatch({ type: c.FETCH, payload: { slug } }))
    .then(() =>
      fetchPage({
        campaignSlug: process.env.CAMPAIGN_SLUG,
        countryCode: process.env.COUNTRY_CODE,
        slug
      })
    )
    .then(page => doesPageBelongToCampaign(page))
    .then(result => {
      const page = { ...result, slug }
      dispatch({ type: c.FETCH_SUCCESS, payload: { page } })
      return page
    })
    .catch(error => {
      dispatch({ type: c.FETCH_FAILURE, payload: { slug } })
      return Promise.reject(error)
    })

export const fetchSupporterPageDonations = ({ slug, id }) => dispatch =>
  Promise.resolve()
    .then(() => dispatch({ type: c.FETCH, payload: { slug } }))
    .then(() =>
      fetchDonationFeed({
        campaign: process.env.CAMPAIGN_UID,
        page_id: id
      })
    )
    .then(donations =>
      dispatch({
        type: c.FETCH_DONATIONS_SUCCESS,
        payload: { slug, donations }
      })
    )
    .catch(error => {
      dispatch({ type: c.FETCH_FAILURE, payload: { slug } })
      return Promise.reject(error)
    })

// Reducer
export default (state = {}, { type, payload = {} }) => {
  const { slug, page } = payload

  switch (type) {
    case c.FETCH: {
      return {
        ...state,
        [slug]: {
          ...state[slug],
          status: 'fetching'
        }
      }
    }

    case c.FETCH_SUCCESS: {
      return {
        ...state,
        [page.slug]: {
          ...state[page.slug],
          ...deserializePage(page),
          status: 'fetched'
        }
      }
    }

    case c.FETCH_FAILURE: {
      return {
        ...state,
        [slug]: {
          ...state[slug],
          status: 'failed'
        }
      }
    }

    case c.FETCH_DONATIONS_SUCCESS: {
      return {
        ...state,
        [slug]: {
          ...state[slug],
          donations: payload.donations.map(deserializeDonation),
          status: 'fetched'
        }
      }
    }

    default: {
      return state
    }
  }
}
