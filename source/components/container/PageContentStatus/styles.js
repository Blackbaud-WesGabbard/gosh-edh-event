import { configureMediaQueries } from 'constructicon/lib/css'

export default (props, { colors, rhythm }) => {
  configureMediaQueries(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'])

  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexPack: 'center',
      height: !props.small && '75vh',
      minHeight: !props.small && `calc(100vh - ${rhythm(10)})`,
      padding: props.small && rhythm(2)
    }
  }
}
