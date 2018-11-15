import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

import Button from 'constructicon/button'
import { Link } from 'react-router'

const NavLinks = ({ classNames, page, styles }) => {
  const links = [
    {
      label: 'Fundraising Page',
      path: '/edit/page'
    },
    {
      label: 'Profile Picture',
      path: '/edit/avatar'
    },
    {
      label: 'Account',
      path: '/edit/account'
    },
    {
      label: 'Password Reset',
      path: '/edit/password'
    }
  ]

  return (
    <nav>
      <Button block background='grey' tag={Link} to={`/pages/${page.slug}`}>
        Back to your page
      </Button>
      <ul className={classNames.links}>
        {links.map(({ path, label, hidden }, index) => (
          <li key={index}>
            <Link
              className={classNames.link}
              activeStyle={styles.active}
              to={path}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default withStyles(styles)(NavLinks)
