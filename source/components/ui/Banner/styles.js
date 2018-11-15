export default (props, traits) => {
  const { rhythm } = traits
  const { banner = {} } = props

  return {
    root: {
      minHeight: rhythm(10),
      backgroundImage: `url(${banner.url})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  }
}
