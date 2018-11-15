export default (props, traits, keyframes) => {
  const { colors, radiuses, rhythm, shadows, transitions } = traits

  return {
    root: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      height: rhythm(2),
      padding: `${rhythm(0.5)} ${rhythm(1)}`,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexPack: 'justify',
      backgroundColor: colors[props.theme],
      color: colors.light,
      boxShadow: shadows.dark,
      borderRadius: rhythm(radiuses.small),
      textAlign: 'left',
      animation: `${keyframes.dropIn} 500ms ease-out 1000ms forwards`,
      marginTop: rhythm(-2),
      opacity: 0
    },

    content: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },

    close: {
      flex: `0 0 ${rhythm(1)}`,
      maxWidth: rhythm(1),
      height: rhythm(1),
      marginLeft: rhythm(0.5),
      lineHeight: rhythm(1),
      textAlign: 'center',
      backgroundColor: colors.shade,
      borderRadius: rhythm(0.5),
      cursor: 'pointer',
      transition: transitions.easeOut,

      ':hover': {
        backgroundColor: colors.shadeDark
      }
    }
  }
}

export const keyframes = {
  dropIn: {
    to: {
      marginTop: 0,
      marginBottom: '0.375rem',
      opacity: 1
    }
  }
}
