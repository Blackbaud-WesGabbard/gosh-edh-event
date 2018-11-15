import { fetchCurrentUser, updateCurrentUser } from 'supporticon/api/me'
import { c } from '..'

export const fetchUser = ({ token }) => dispatch =>
  Promise.resolve()
    .then(() => dispatch({ type: c.USER_FETCH }))
    .then(() => fetchCurrentUser({ token }))
    .then(user => ({ ...user, token }))
    .then(user => {
      dispatch({ type: c.USER_SUCCESS, payload: { user } })
      return user
    })
    .catch(error => {
      dispatch({ type: c.USER_FAILURE })
      return Promise.reject(error)
    })

export const updateUser = user => dispatch =>
  Promise.resolve()
    .then(() => dispatch({ type: c.USER_FETCH }))
    .then(() => updateCurrentUser(user))
    .then(() => dispatch({ type: c.USER_SUCCESS, payload: { user } }))
    .catch(error => {
      dispatch({ type: c.USER_FAILURE })
      return Promise.reject(error)
    })

export default (state = {}, { type, payload }) => {
  switch (type) {
    case c.USER_SUCCESS: {
      return {
        ...state,
        ...payload.user
      }
    }

    case c.USER_FAILURE:
    case c.CLEAR: {
      return {}
    }

    default: {
      return state
    }
  }
}
