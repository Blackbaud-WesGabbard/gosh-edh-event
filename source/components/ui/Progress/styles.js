export default (props, { rhythm, scale }) => ({
  root: {
    margin: `${rhythm(1)} auto`
  },

  metric: {
    root: {
      textAlign: 'inherit'
    },
    label: {
      display: 'inline-block',
      margin: 0,
      marginRight: rhythm(0.5)
    },
    amount: {
      display: 'inline-block',
      fontSize: scale(0)
    }
  }
})
