export default (props, traits) => {
  const { colors, rhythm, scale, treatments, radiuses } = traits

  return {
    feedContainer: {
      padding: '50px 0',
      '& #curator-feed': {
        marginTop: '35px'
      }
    },
    title: {
      fontSize: scale(3),
      fontWeight: 'bold',
      paddingBottom: '10px',
      '& > span': {
        color: `${colors.red}`
      }
    },
    feed: {
      '& .crt-grid-post-v2 .crt-post-c': {
        padding: '3px',
        '& .crt-post-content': {
          // border: `1px solid ${colors.red}`,
          borderRadius: radiuses.small,
          backgroundColor: colors.paleGrey
        }
      },
      '& .crt-feed-more a': {
        backgroundColor: `${colors.red} !important`,
        color: `${colors.light} !important`,
        borderRadius: '2px !important',
        padding: `${rhythm(0.6)} !important`,
        ...treatments.button
      },
      '& .crt-post-c .crt-post': {
        boxShadow: colors.shadow,
        margin: '0.75rem',
        fontSize: '13px'
      },
      '& .crt-post.crt-post-max-height .crt-post-read-more': {
        background: 'linear-gradient(to bottom, rgba(255,255,255,0), #fff 50%)'
      },
      '& .crt-post-bg': {
        background: 'transparent'
      },
      '& .crt-post .crt-post-header img': {
        width: '32px'
      },
      '& .crt-post .crt-post-header .crt-social-icon': {
        width: '30px'
      },
      '& .crt-post .crt-post-header .crt-social-icon i': {
        fontSize: '30px'
      },
      '& .crt-post .crt-post-header .crt-post-name': {
        left: '90px'
      },
      '& .crt-post .crt-post-read-more .crt-post-read-more-button': {
        backgroundColor: colors.red,
        color: colors.light,
        borderRadius: '2px',
        height: 'auto',
        ...treatments.button
      }
    }
  }
}
