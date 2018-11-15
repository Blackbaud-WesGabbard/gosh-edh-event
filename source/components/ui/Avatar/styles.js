export default ({ size }, { colors, rhythm, transitions }) => ({
  wrapper: {
    position: 'relative',
    margin: 'auto',
    width: rhythm(size * 3),
    height: rhythm(size * 3),
    overflow: 'hidden',
    borderRadius: '50%'
  },

  image: {
    display: 'block'
  },

  edit: {
    position: 'absolute',
    zIndex: 6,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: colors.light,
    opacity: 0,
    transition: transitions.easeOut,

    '&:hover': {
      opacity: 1
    }
  }
})
