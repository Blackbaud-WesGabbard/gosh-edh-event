import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

import Container from 'constructicon/container'
import Image from '../../ui/Image'
import { Link } from 'react-router'
import Navigation from '../Navigation'

const Header = ({ logo = {}, classNames, styles }) => (
  <div className={classNames.wrapper}>
    <header aria-label='Site header' role='banner' className={classNames.root}>
      <Container spacing={{ y: 0.5, x: 1 }} styles={styles.content}>
        <div className={classNames.mainLogo}>
          <Link to='/'>
            <Image image={logo} />
          </Link>
        </div>
        <Navigation />
      </Container>
    </header>
  </div>
)

export default withStyles(styles)(Header)
