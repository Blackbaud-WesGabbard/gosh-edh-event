import React from 'react'
import { compose } from 'redux'
import withStyles from 'constructicon/with-styles'
import styles from './styles'
import withToggle from 'constructicon/with-toggle'

import Container from 'constructicon/container'
import FlatModal from '../../ui/FlatModal'
import RichText from '../../ui/RichText'
import Grid from 'constructicon/grid'
import GridColumn from 'constructicon/grid-column'
import Icon from 'constructicon/icon'

const VideoSection = ({
  background,
  classNames,
  icon,
  html,
  onToggleOff,
  onToggleOn,
  styles,
  toggled,
  video = {}
}) => (
  <Container outerColor='lighterGrey' spacing={{ x: 1, y: 3 }}>
    <Grid
      styles={{
        alignItems: 'center'
      }}
    >
      <GridColumn lg={7}>
        <div className={classNames.contentSection}>
          <RichText>{html}</RichText>
        </div>
      </GridColumn>
      <GridColumn lg={5}>
        <div className={classNames.videoSection}>
          <div className={classNames.preview} onClick={onToggleOn}>
            <div className={classNames.button}>
              <Icon name='play' size={2} />
            </div>
          </div>
          <FlatModal
            contentLabel='Video'
            isOpen={toggled}
            onRequestClose={onToggleOff}
          >
            <div
              className={classNames.video}
              dangerouslySetInnerHTML={{
                __html: video.html.replace(
                  'feature=oembed',
                  'feature=oembed&autoplay=1'
                )
              }}
            />
          </FlatModal>
        </div>
      </GridColumn>
    </Grid>
  </Container>
)

export default compose(withToggle, withStyles(styles))(VideoSection)
