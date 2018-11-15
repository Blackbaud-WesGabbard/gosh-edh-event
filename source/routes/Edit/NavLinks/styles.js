export default (props, { colors, rhythm, transitions }) => ({
  links: {
    marginTop: rhythm(1)
  },

  link: {
    display: 'block',
    padding: `${rhythm(0.66)} ${rhythm(1)}`,
    borderBottom: `1px solid ${colors.paleGrey}`,
    transition: transitions.easeOut,

    '&:hover': {
      backgroundColor: colors.palerGrey
    }
  },

  active: {
    color: colors.primary,
    borderLeft: `3px solid ${colors.primary}`
  }
})
