import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'
import Button from 'constructicon/button'
import Container from 'constructicon/container'

const HomeBanner = ({ props, classNames, image, title, cta }) => (
  <div className={classNames.root}>
    <Container spacing={{ x: 1, y: 1 }}>
      <div>
        <img src={image.url} />
        <h1 className={classNames.h1}>{title}</h1>
        {cta.url.length > 0 && (
          <div className={classNames.registration}>
            <Button
              tag='a'
              href={cta.url}
              radius='none'
              target='_blank'
              styles={{
                fontWeight: 'bold'
              }}
            >
              Register
            </Button>
          </div>
        )}
      </div>
    </Container>
  </div>
)

export default withStyles(styles)(HomeBanner)
