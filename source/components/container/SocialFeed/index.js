import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'
import Container from 'constructicon/container'

class SocialFeed extends React.Component {
  componentDidMount () {
    window.curatorConfig = { container: '#curator-feed-default' }

    setTimeout(function () {
      const script = document.createElement('script')
      script.src =
        'https://cdn.curator.io/published/099a1759-813d-4dbc-9f63-283946b9.js'
      document.body.appendChild(script)
    }, 0)
  }

  render () {
    const { classNames } = this.props

    return (
      <Container spacing={{ x: 1, y: 1 }}>
        <div className={classNames.feedContainer}>
          <div className={classNames.title}>
            Social Wall <span>#HomeRunforShelter</span>
          </div>
          <p>
            Join the conersation by sharing your HomeRun pics with the hashtag
            above
          </p>
          <div id='curator-feed' className={classNames.feed} />
        </div>
      </Container>
    )
  }
}

export default withStyles(styles)(SocialFeed)
