import Image from 'next/image'
import { styled } from 'stitches.config'
import { useCartContext } from 'contexts/CartContext'

interface Props {}

const Cart = () => {
  const { cartQty, setCartQty } = useCartContext()

  return (
    <Wrapper>
      <h2>Cart</h2>
      {cartQty ? (
        <Content>
          <Image
            src={'/images/image-product-1-thumbnail.jpg'}
            width={50}
            height={50}
            alt=''
          />
          <div>
            <p>Autumn Limited Edition</p>
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
        </Content>
      ) : (
        <p>Your cart is empty</p>
      )}
      <Button>Checkout</Button>
    </Wrapper>
  )
}

const Wrapper = styled('section', {
  position: 'absolute',
  zIndex: '1',
  backgroundColor: '#fff',
  padding: '1rem',
  border: '2px solid',
  borderRadius: '10px',
  inset: '60px 20px auto 20px',
  maxWidth: '800px',
  margin: 'auto',

  '& > h2': {
    paddingBottom: '1rem',
    marginBottom: '1rem',
    borderBottom: '1px solid #000',
  },

  '& > p': {
    textAlign: 'center',
  },
})

const Content = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  alignItems: 'center',
  justifyItems: 'center',
  justifyContent: 'space-between',

  '& > *:first-child': {
    gridRow: '1 / span 1',
    borderRadius: '5px',
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
})

export default Cart
