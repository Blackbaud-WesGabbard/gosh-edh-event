const fills = {
  orange: {
    background: '#C1422B',
    icon: '#FC6621'
  },
  pink: {
    background: '#F3ACC6',
    icon: '#8B3A8A'
  },
  yellow: {
    background: '#F6D03B',
    icon: '#FC6621'
  },
  blue: {
    background: '#A7D7E5',
    icon: '#1A5B80'
  },
  green: {
    background: '#2F645A',
    icon: '#A5D9D2'
  },
  purple: {
    background: '#8B3A8A',
    icon: '#FFFFFF'
  },
  grey: {
    background: '#F3F3F3',
    icon: '#9F9F9F'
  }
}

const getFillsFromName = name => {
  const key = name.toLowerCase().slice(0, 1)

  switch (key) {
    case 'a':
    case 'b':
    case 'c':
    case 'd':
      return fills.orange
    case 'e':
    case 'f':
    case 'g':
    case 'h':
      return fills.pink
    case 'i':
    case 'j':
    case 'k':
    case 'l':
      return fills.yellow
    case 'm':
    case 'n':
    case 'o':
    case 'p':
      return fills.blue
    case 'q':
    case 'r':
    case 's':
    case 't':
      return fills.green
    case 'u':
    case 'v':
    case 'w':
    case 'x':
      return fills.purple
    case 'y':
    case 'z':
    default:
      return fills.grey
  }
}

export default getFillsFromName
