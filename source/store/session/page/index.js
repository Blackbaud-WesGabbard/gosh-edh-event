import {
  deserializePage,
  fetchPages,
  fetchPage as fetchPageData,
  updatePage as updatePageData
} from 'supporticon/api/pages'
import { c } from '..'

const getUserPageForCampaign = (pages = []) => {
  if (!pages.length) return

  return fetchPages({
    allPages: true,
    ids: pages.join(','),
    campaign: process.env.CAMPAIGN_UID
  }).then((pages = []) => pages[0])
}

export const fetchUserPage = (user = {}) => dispatch =>
  Promise.resolve()
    .then(() => dispatch({ type: c.PAGE_FETCH }))
    .then(() => getUserPageForCampaign(user.page_ids))
    .then(page => dispatch({ type: c.PAGE_SUCCESS, payload: { page } }))
    .catch(err => {
      dispatch({ type: c.PAGE_FAILURE })
      return Promise.reject(err)
    })

export const fetchPage = ({ id }) => dispatch =>
  Promise.resolve()
    .then(() => dispatch({ type: c.PAGE_FETCH }))
    .then(() => fetchPageData(id))
    .then(page => {
      dispatch({ type: c.PAGE_SUCCESS, payload: { page } })
      return page
    })
    .catch(error => {
      dispatch({ type: c.PAGE_FAILURE })
      return Promise.reject(error)
    })

export const updatePage = (id, data) => dispatch =>
  Promise.resolve()
    .then(() => dispatch({ type: c.PAGE_FETCH }))
    .then(() => updatePageData(id, data))
    .then(page => dispatch({ type: c.PAGE_SUCCESS, payload: { page } }))
    .catch(err => {
      dispatch({ type: c.PAGE_FAILURE })
      return Promise.reject(err)
    })

export default (state = {}, { type, payload }) => {
  switch (type) {
    case c.PAGE_SUCCESS: {
      const { page } = payload

      return page
        ? {
          ...state,
          ...deserializePage(page)
        }
        : state
    }

    case c.PAGE_FAILURE:
    case c.CLEAR: {
      return {}
    }

    default: {
      return state
    }
  }
}
