import { useState } from 'react'
import { styled } from 'stitches.config'
import Menu from './Menu'
import Cart from './Cart'
import { useCartContext } from 'contexts/CartContext'
import Image from 'next/image'
import NavLinks from './NavLinks'

const Header = () => {
  const { isCartOpen, setIsCartOpen } = useCartContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <StyledHeader>
      <nav>
        <Menu {...{ isMenuOpen, setIsMenuOpen }} />
        {!isMenuOpen ? (
          <MenuSvg
            onClick={() => setIsMenuOpen(true)}
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
            onClick={() => setIsMenuOpen(false)}
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
        <Brand>
          <Image src='/images/logo.svg' width={135} height={20} alt='logo' />
        </Brand>
        <NavLinks />
      </nav>
      <ImageWrapper>
        <CartIcon>
          <Image
            onClick={() => setIsCartOpen((curr) => !curr)}
            className='cart-icon'
            src='/images/icon-cart.svg'
            height={20}
            width={22}
            alt='cart button'
          />
        </CartIcon>
        {isCartOpen && <Cart />}
        <Avatar>
          <Image
            src='/images/image-avatar.png'
            alt='avatar'
            width={24}
            height={24}
          />
        </Avatar>
      </ImageWrapper>
    </StyledHeader>
  )
}

const StyledHeader = styled('header', {
  maxWidth: '800px',
  height: '68px',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #ccc',
  padding: '0 24px',

  '& > nav': {
    display: 'flex',
    alignItems: 'center',
  },

  '@bp1': {
    maxWidth: '1264px',
  },
})

const MenuSvg = styled('svg', {
  position: 'absolute',
  width: '16px',
  cursor: 'pointer',
  zIndex: '2',

  '@bp1': {
    display: 'none',
  },
})

const CloseSvg = styled(MenuSvg, {})

const Brand = styled('a', {
  userSelect: 'none',
  position: 'absolute',
  transform: 'translateX(33px)',

  '@bp1': {
    position: 'revert',
    transform: 'revert',
  },
})

const ImageWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

const CartIcon = styled('div', {
  all: 'unset',
  cursor: 'pointer',
  marginRight: '20px',
})

const Avatar = styled('div', {
  cursor: 'pointer',
  borderRadius: '50%',

  '&:hover': {
    outline: '2px solid orange',
  },
})

export default Header
