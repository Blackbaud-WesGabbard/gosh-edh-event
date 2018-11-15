const c = {
  OPTIN: 'app/analytics/OPTIN',
  OPTOUT: 'app/analytics/OPTOUT'
}

export const optin = () => ({
  type: c.OPTIN
})

export const optout = () => ({
  type: c.OPTOUT
})

export default (state = {}, { type }) => {
  switch (type) {
    case c.OPTIN:
      return { optout: false }
    case c.OPTOUT:
      return { optout: true }
    default:
      return state
  }
}
