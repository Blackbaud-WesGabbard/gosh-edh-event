import quote from './quote.svg'

export default (
  { canReply, fills, image, loading, replying },
  { colors, rhythm, mediaQuery, treatments: { contain, cover } }
) => {
  const quoteStyles = {
    content: '""',
    backgroundImage: `url('${quote}')`,
    height: rhythm(1.5),
    width: rhythm(1.5),
    display: 'block',
    top: '50%',
    position: 'absolute',
    ...contain
  }

  return {
    donation: {
      position: 'relative',
      display: 'flex',
      width: '100vw',
      flexDirection: 'column',
      padding: `${rhythm(1)} ${rhythm(1)} 0`,
      backgroundColor: colors.light,

      [mediaQuery('sm')]: {
        width: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        padding: rhythm(0.5),
        justifyContent: 'flex-start'
      },

      '&:nth-child(2):last-child': {
        borderTop: `1px solid ${colors.offWhite}`
      }
    },

    thankYouContent: {
      width: '100%',
      display: 'flex',
      paddingLeft: '2em',
      flexDirection: 'column',
      [mediaQuery('sm')]: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 0
      }
    },

    leftDonationText: {
      width: 'calc(100% - 2.4em)',
      [mediaQuery('sm')]: {
        width: '15em'
      }
    },

    leftThankYouText: {
      width: 'calc(100% - 3em)',
      [mediaQuery('sm')]: {
        width: '12.7em'
      }
    },

    name: {
      fontWeight: 'bold',
      marginBottom: rhythm(0.25),
      fontSize: rhythm(0.75),
      lineHeight: '1.1em',
      whiteSpace: 'nowrap',
      overflowY: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '16em'
    },

    amount: {
      color: colors.primary,
      fontWeight: 'bold',
      fontSize: rhythm(0.65)
    },

    date: {
      display: 'none',

      [mediaQuery('sm')]: {
        padding: `0 ${rhythm(0.25)}`,
        display: 'inline-block',
        color: colors.lightGrey,
        fontSize: rhythm(0.666)
      }
    },

    avatarWrapper: {
      marginLeft: rhythm(-1.8),
      paddingRight: rhythm(0.5),

      [mediaQuery('sm')]: {
        paddingRight: rhythm(0.5),
        margin: 0
      }
    },

    donator: {
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center'
    },

    message: {
      height: '100%',
      lineHeight: '1.4em',
      flexGrow: 1,
      padding: `${rhythm(1)} 0`,
      position: 'relative',

      [mediaQuery('sm')]: {
        padding: `0 0 0 ${rhythm(2)}`
      },

      '&:before': {
        transform: 'translateY(-50%)',
        left: rhythm(-0.5),
        ...quoteStyles,

        [mediaQuery('sm')]: {
          left: rhythm(1)
        }
      },

      '&:after': {
        transition: 'all 0.1s ease',
        [mediaQuery('sm')]: {
          transform: 'translateY(-50%) rotate(180deg)',
          right: canReply && !replying ? (loading ? '0.5em' : '2.5em') : 0,
          ...quoteStyles
        }
      }
    },

    messageText: {
      paddingLeft: rhythm(1.5),
      paddingRight: rhythm(1),
      [mediaQuery('sm')]: {
        paddingRight: rhythm(canReply ? 4 : 0)
      }
    },

    reply: {
      right: '1.9em',
      top: '0.8em',
      cursor: 'pointer',
      padding: rhythm(0.5),
      position: 'absolute',
      borderRadius: rhythm(),
      transition: 'all 0.2s ease',

      [mediaQuery('sm')]: {
        right: '0.4em',
        top: '0.8em'
      },

      '&:hover': {
        transform: 'scale(1.15) rotate(-6deg)'
      }
    },

    replySquare: {
      position: 'absolute',
      height: '100%',
      top: 0,
      left: 0,
      bottom: 0,
      width: rhythm(1.5),
      background: fills.background,
      '& svg': {
        width: '1em',
        position: 'absolute',
        top: '0.2em',
        left: '0.6em'
      },
      [mediaQuery('sm')]: {
        position: 'relative',
        borderRadius: rhythm(0.2),
        height: rhythm(2),
        width: rhythm(2),
        '& svg': {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }
      }
    },

    pageAvatar: {
      zIndex: 2,
      position: 'relative',
      marginRight: rhythm(0.5),
      marginLeft: '-1.9em',
      height: rhythm(2),
      width: rhythm(2),
      borderRadius: rhythm(2),
      backgroundImage: `url('${image}')`,
      ...cover,

      [mediaQuery('sm')]: {
        marginLeft: rhythm(-0.25)
      }
    }
  }
}
