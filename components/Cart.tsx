import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useCartContext } from 'contexts/CartContext'
import { styled } from 'stitches.config'

const Cart = () => {
  const { cartQty, setCartQty, setIsCartOpen } = useCartContext()
  const wrapperRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (
        !wrapperRef.current?.contains(e.target) &&
        e.target.className !== 'cart-icon'
      ) {
        setIsCartOpen(false)
      }
    }

    window.addEventListener('mousedown', handleClickOutside)
    return () => window.removeEventListener('mousedown', handleClickOutside)
  }, [setIsCartOpen])

  return (
    <Wrapper ref={wrapperRef}>
      <h2>Cart</h2>
      <Content
        css={
          cartQty
            ? {
                gridTemplateColumns: 'auto 1fr auto',
              }
            : { height: '150px', textAlign: 'center' }
        }
      >
        {cartQty ? (
          <>
            <Image
              src={'/images/image-product-1-thumbnail.jpg'}
              width={50}
              height={50}
              alt=''
            />
            <div>
              <p>Autumn Limited Edition Sneakers</p>
              <p>
                $125.00 x {cartQty} <strong>$375.00</strong>
              </p>
            </div>
            <DeleteSvg
              onClick={() => setCartQty(0)}
              width='14'
              height='16'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <defs>
                <path
                  d='M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z'
                  id='a'
                />
              </defs>
              <use fill='currentColor' fillRule='nonzero' xlinkHref='#a' />
            </DeleteSvg>
            <Button>Checkout</Button>
          </>
        ) : (
          <Text>Your cart is empty</Text>
        )}
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled('section', {
  position: 'absolute',
  zIndex: '1',
  backgroundColor: '#fff',
  borderRadius: '10px',
  inset: '75px 8px auto 8px',
  maxWidth: '790px',
  minHeight: '255px',
  margin: 'auto',
  boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.25)',

  '& > h2': {
    padding: '24px',
    borderBottom: '#ddd 1px solid',
    fontSize: '1rem',
  },

  '& > p': {
    textAlign: 'center',
  },

  '@bp1': {
    maxWidth: '400px',
    right: 0,
    left: 'auto',
  },
})

const Content = styled('div', {
  display: 'grid',
  alignItems: 'center',
  padding: '24px',
  paddingBottom: '0',
  gap: '15px',
  rowGap: '25px',

  '& > *:first-child': {
    gridRow: '1 / span 1',
    borderRadius: '5px',
  },

  '& > div': {
    alignSelf: 'start',

    '& > p': {
      color: '$darkGrayishBlue',

      '&:nth-child(1)': {
        paddingBottom: '5px',
        whiteSpace: 'noWrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '20.5ch',
      },

      '&:nth-child(2)': {
        letterSpacing: '0.025em',
      },

      '& > strong': {
        color: '$black',
        paddingLeft: '5px',
      },
    },
  },
})

const DeleteSvg = styled('svg', {
  color: '#C3CAD9',
  cursor: 'pointer',
  transition: '0.3s ease',

  '&:hover': {
    color: '#a30404',
  },
})

const Button = styled('button', {
  width: '100%',
  height: '56px',
  backgroundColor: '$orange',
  color: '#fff',
  fontSize: '1rem',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  gridRow: '2',
  gridColumn: '1 / span 3',
})

const Text = styled('p', {})

export default Cart
