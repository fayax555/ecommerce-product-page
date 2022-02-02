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
  },
})

const Link = styled('a', {
  padding: '0 10px',
  cursor: 'pointer',
  fontSize: '1.125rem',
})

export default NavLinks
