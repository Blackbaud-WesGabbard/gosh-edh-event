export default (props, { rhythm, mediaQuery, colors }, keyframes) => ({
  label: {
    fontSize: '0.8em',
    fontWeight: 'bold',
    padding: `${rhythm(0.5)} ${rhythm(0.5)} 0`,
    display: 'block'
  },

  replying: {
    width: '100vw',
    paddingRight: '1.6em',
    position: 'relative',
    overflow: 'hidden',
    marginTop: 1,
    background: colors.light,
    height: 'auto',

    [mediaQuery('sm')]: {
      width: '100%',
      paddingRight: '0',
      animation: `${keyframes.grow} 0.2s cubic-bezier(0,1.07,1,1) forwards`
    }
  },

  input: {
    padding: rhythm(0.5),
    display: 'block',
    width: '100%'
  },

  buttonGroup: {
    position: 'initial',
    padding: '0 0.8em 0.8em 0.8em',
    textAlign: 'right',
    [mediaQuery('sm')]: {
      padding: '0',
      textAlign: 'left',
      position: 'absolute',
      right: '0.7em',
      top: '0.7em'
    }
  },

  close: {
    position: 'absolute',
    top: '-8px',
    right: '1em',
    [mediaQuery('sm')]: {
      position: 'initial',
      top: 'initial',
      right: 'initial'
    }
  },

  submit: {
    background: colors.primary
  },

  disabled: {
    background: colors.grey,
    pointerEvents: 'none',
    opacity: '0.3'
  }
})

export const keyframes = {
  grow: {
    from: {
      height: '0em'
    },
    to: {
      height: '4.25em'
    }
  }
}
