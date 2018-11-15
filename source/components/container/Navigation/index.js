import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { clearSession } from '../../../store/session'
import { setFlashMessage } from '../../../store/flashMessages'
import withToggle from 'constructicon/with-toggle'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

import Icon from 'constructicon/icon'
import { Link } from 'react-router'

const Navigation = ({
  classNames,
  clearSession,
  toggled,
  onToggle,
  onToggleOff,
  setFlashMessage,
  page,
  user
}) => (
  <div>
    <button
      aria-hidden
      aria-label='Toggle Menu'
      className={classNames.toggle}
      onClick={onToggle}
    >
      <Icon name={toggled ? 'close' : 'menu'} size={1} />
    </button>
    <nav
      aria-label='Site Navigation'
      role='navigation'
      className={classNames.nav}
      onClick={onToggleOff}
    >
      <div>
        <ul className={classNames.links}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/faqs'>FAQs</Link>
          </li>
          <li>
            <Link to='/fundraise'>Fundraise</Link>
          </li>
          <li>
            <Link to='/fundraise'>Find a Supporter</Link>
          </li>
          <li>
            <Link to='/fundraise'>Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

const mapStateToProps = ({ session: { page, user } }) => ({
  page,
  user
})

const mapDispatchToProps = { clearSession, setFlashMessage }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withToggle,
  withStyles(styles)
)(Navigation)
