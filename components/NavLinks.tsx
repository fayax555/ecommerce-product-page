import { styled } from 'stitches.config'

interface NavProps {
  move: number
}

const NavLinks = ({ move }: NavProps) => (
  <Wrapper css={{ transform: `translateX(${move}%)` }}>
    <Link>Collections</Link>
    <Link>Men</Link>
    <Link>Women</Link>
    <Link>About</Link>
    <Link>Contact</Link>
  </Wrapper>
)

const Wrapper = styled('div', {
  display: 'grid',
  gap: '1rem',
  backgroundColor: 'lightBlue',
  padding: '1rem',
  position: 'absolute',
  zIndex: '1',
  transition: '0.1s ease-in-out',
})

const Link = styled('a', {
  padding: '0 10px',
})

export default NavLinks
