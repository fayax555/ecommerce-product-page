import { useState } from 'react'
import { styled } from 'stitches.config'
import NavLinks from './NavLinks'
import Cart from './Cart'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [move, setMove] = useState(-108)

  return (
    <StyledHeader>
      <nav>
        <NavLinks move={move} />
        {!isMenuOpen ? (
          <MenuSvg
            onClick={() => {
              setIsMenuOpen(true)
              setMove(-8)
            }}
            width='16'
            height='15'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z'
              fill='#69707D'
              fillRule='evenodd'
            />
          </MenuSvg>
        ) : (
          <CloseSvg
            onClick={() => {
              setIsMenuOpen(false)
              setMove(-108)
            }}
            width='14'
            height='15'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
              fill='#69707D'
              fillRule='evenodd'
            />
          </CloseSvg>
        )}
        <Brand>{!isMenuOpen ? 'sneakers' : ''}</Brand>
      </nav>
      <div>
        <button onClick={() => setIsCartOpen(!isCartOpen)}>Cart Icon</button>
        {isCartOpen && <Cart />}
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

const MenuSvg = styled('svg', {
  cursor: 'pointer',
  marginRight: '20px',
})

const CloseSvg = styled(MenuSvg, {})

const Brand = styled('a', {
  fontSize: '1.4rem',
  fontWeight: 'bold',
  marginRight: '20px',
  cursor: 'pointer',
})

export default Header
