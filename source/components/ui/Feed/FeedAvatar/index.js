import React from 'react'

const FeedAvatar = ({ backgroundColor, iconColor }) => (
  <svg
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='50'
    height='50'
    viewBox='0 0 96 96'
  >
    <use fill={backgroundColor} xlinkHref='#path0_fill' />
    <use
      fill={iconColor}
      transform='translate(33.385 23)'
      xlinkHref='#path1_fill'
    />
    <use
      fill={iconColor}
      transform='translate(24 52)'
      xlinkHref='#path2_fill'
    />
    <defs>
      <path
        id='path0_fill'
        d='M96 48c0 26.5097-21.4903 48-48 48S0 74.5097 0 48 21.4903 0 48 0s48 21.4903 48 48z'
      />
      <path
        id='path1_fill'
        d='M30 15c0 8.2843-6.7157 15-15 15-8.28427 0-15-6.7157-15-15C0 6.71573 6.71573 0 15 0c8.2843 0 15 6.71573 15 15z'
      />
      <path
        id='path2_fill'
        d='M46 19H3.00001S0 19 0 13 7.00002 0 11 0c4 0 7 4 13.5 4S34-2e-7 38 0c4 0 11 7 11 13s-3 6-3 6z'
      />
    </defs>
  </svg>
)

export default FeedAvatar
