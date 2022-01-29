import { styled } from '@stitches/react'

interface Props {}

const NavLinks = () => (
  <div>
    <Link>Collections</Link>
    <Link>Men</Link>
    <Link>Women</Link>
    <Link>About</Link>
    <Link>Contact</Link>
  </div>
)

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <Brand>sneakers</Brand>
        {/* <NavLinks /> */}
      </nav>
      <div>
        <button>Cart Icon</button>
        <button>Profile</button>
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled('header', {
  maxWidth: '800px',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid #ccc',
  padding: '10px',
})

const Brand = styled('a', {
  fontSize: '1.4rem',
  fontWeight: 'bold',
  marginRight: '20px',
})

const Link = styled('a', {
  padding: '0 10px',
})

export default Header
