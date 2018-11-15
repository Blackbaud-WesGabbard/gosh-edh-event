export default (props, traits) => {
  const { colors } = traits

  return {
    root: {
      backgroundColor: colors.grey,
      textAlign: 'right'
    }
  }
}
