import { styled } from 'stitches.config'

const NavLinks = () => (
  <LinkWrapper>
    <Link>Collections</Link>
    <Link>Men</Link>
    <Link>Women</Link>
    <Link>About</Link>
    <Link>Contact</Link>
  </LinkWrapper>
)

const LinkWrapper = styled('div', {
  display: 'grid',
  gap: '1.5rem',
  fontWeight: '$bold',

  '@bp1': {
    display: 'flex',
    fontWeight: 'revert',
    gap: '32px',
    marginLeft: '60px',
  },
})

const Link = styled('a', {
  padding: '0 10px',
  cursor: 'pointer',
  fontSize: '1.125rem',
  letterSpacing: '0.005em',

  '@bp1': {
    padding: '0',
    paddingBottom: '45px',
    paddingTop: '42px',
    fontSize: '0.95rem',
    color: '$darkGrayishBlue',
    '&:hover': {
      marginBottom: '-4px',
      borderBottom: '$orange 4px solid',
      color: '$black',
    },
  },
})

export default NavLinks
