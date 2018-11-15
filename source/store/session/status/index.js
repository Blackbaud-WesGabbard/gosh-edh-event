import { c } from '..'

export const clearSession = () => dispatch =>
  Promise.resolve().then(() => dispatch({ type: c.CLEAR }))

export default (state = 'empty', { type }) => {
  switch (type) {
    case c.USER_FETCH:
    case c.PAGE_FETCH: {
      return 'fetching'
    }

    case c.USER_SUCCESS:
    case c.PAGE_SUCCESS: {
      return 'fetched'
    }

    case c.USER_FAILURE:
    case c.PAGE_FAILURE: {
      return 'failed'
    }

    case c.CLEAR: {
      return 'empty'
    }

    default: {
      return state
    }
  }
}
