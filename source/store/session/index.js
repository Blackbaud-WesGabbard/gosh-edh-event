import { combineReducers } from 'redux'
import page from './page'
import user from './user'
import status from './status'

export const c = {
  CLEAR: 'app/session/CLEAR',
  PAGE_FETCH: 'app/session/page/FETCH',
  USER_FETCH: 'app/session/user/FETCH',
  PAGE_SUCCESS: 'app/session/page/FETCH_SUCCESS',
  USER_SUCCESS: 'app/session/user/FETCH_SUCCESS',
  PAGE_FAILURE: 'app/session/page/FETCH_FAILURE',
  USER_FAILURE: 'app/session/user/FETCH_FAILURE'
}

export { fetchUser, updateUser } from './user'
export { fetchUserPage, fetchPage, updatePage } from './page'
export { clearSession } from './status'

export default combineReducers({
  page,
  user,
  status
})
