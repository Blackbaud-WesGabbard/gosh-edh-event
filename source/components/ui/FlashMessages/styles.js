export default (props, traits) => {
  const { mediaQuery, rhythm } = traits

  return {
    root: {
      position: 'fixed',
      zIndex: 99,
      bottom: rhythm(1),
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: rhythm(20),

      [mediaQuery('md')]: {
        bottom: 'auto',
        top: rhythm(1)
      }
    }
  }
}
