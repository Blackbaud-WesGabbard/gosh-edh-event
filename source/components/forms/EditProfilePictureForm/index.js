import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { uploadToFilestack } from '../../../lib/filestack'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

import { setFlashMessage } from '../../../store/flashMessages'
import { updatePage } from '../../../store/session'

import AvatarEditor from 'react-avatar-editor'
import Button from 'constructicon/button'
import Dropzone from 'react-dropzone'
import Form from 'constructicon/form'
import Slider from 'react-slider'

class EditProfilePictureForm extends Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      image: null,
      status: null,
      zoom: 100,
      step: 0
    }
  }

  handleSubmit (e) {
    e.preventDefault()

    const { isTeam, pageID, setFlashMessage, user, updatePage } = this.props

    const canvas = this.editor.getImageScaledToCanvas()
    const image = canvas.toDataURL('image/jpeg', 1)

    return Promise.resolve()
      .then(() => this.setState({ status: 'fetching', step: 1 }))
      .then(() => uploadToFilestack(image, pageID))
      .then(url =>
        Promise.all([
          this.setState({ step: 2 }),
          updatePage(pageID, { image: url, token: user.token })
        ])
      )
      .then(() =>
        setFlashMessage(
          isTeam
            ? 'Your team profile picture has been updated'
            : 'Your profile picture has been updated'
        )
      )
      .then(() => this.setState({ status: 'fetched', step: 0 }))
      .catch(error => {
        setFlashMessage(
          'There was an error updating your profile picture',
          true
        )
        this.setState({ status: 'failed', step: 0 })
        return Promise.reject(error)
      })
  }

  getCurrentStep () {
    const { step } = this.state

    switch (step) {
      case 1:
        return 'Processing Image (1 of 2)'
      case 2:
        return 'Uploading Image (2 of 2)'
      default:
        return 'Update'
    }
  }

  render () {
    const { classNames } = this.props

    const { image, status, zoom } = this.state

    if (!image) {
      return (
        <Dropzone
          className={classNames.dropzone}
          onDrop={images => this.setState({ image: images[0] })}
        >
          <Button>Select Image</Button>
          <p>By clicking to browse or dropping a file into this area</p>
        </Dropzone>
      )
    }

    return (
      <div className={classNames.root}>
        <AvatarEditor
          border={25}
          color={[255, 255, 255, 0.5]}
          image={image}
          height={300}
          ref={el => {
            this.editor = el
          }}
          rotate={0}
          scale={zoom / 100}
          width={300}
        />
        <button
          className={classNames.clear}
          onClick={() => this.setState({ image: null })}
        >
          Clear Image
        </button>
        <Slider
          className={classNames.slider}
          defaultValue={100}
          handleClassName={classNames.sliderHandle}
          min={100}
          max={200}
          onChange={zoom => this.setState({ zoom })}
        />
        <Form
          icon={false}
          isLoading={status === 'fetching'}
          noValidate
          onSubmit={this.handleSubmit}
          submit={this.getCurrentStep()}
          footer={
            <div className={classNames.note}>
              Please be patient, uploading your profile picture can take up to 2
              minutes.
            </div>
          }
        />
      </div>
    )
  }
}

const mapStateToProps = ({ session: { user } }) => ({ user })
const mapDispatchToProps = { setFlashMessage, updatePage }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(EditProfilePictureForm)
