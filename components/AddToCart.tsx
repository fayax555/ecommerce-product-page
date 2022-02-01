import { useState } from 'react'
import { styled } from 'stitches.config'
import { useCartContext } from 'contexts/CartContext'

const AddToCart = () => {
  const { setCartQty, setIsCartOpen } = useCartContext()
  const [qty, setQty] = useState(0)

  return (
    <div>
      <CountWrapper>
        <button disabled={qty === 0} onClick={() => setQty(qty - 1)}>
          -
        </button>{' '}
        <span>{qty}</span> <button onClick={() => setQty(qty + 1)}>+</button>
      </CountWrapper>
      <AddToCartButton
        disabled={qty === 0}
        onClick={() => {
          setCartQty((currQty) => currQty + qty)
          setIsCartOpen(true)
          setQty(0)
        }}
      >
        Add to cart
      </AddToCartButton>
    </div>
  )
}

const CountWrapper = styled('div', {
  '& > button': {
    color: '$orange',
  },
})

const AddToCartButton = styled('button', {
  padding: '15px',
  position: 'relative',
  width: '100%',
  cursor: 'pointer',
  backgroundColor: '$orange',
  color: '$white',

  '&::before': {
    content: '',
    position: 'absolute',
    transform: 'translate(-40px, -3px)',
    width: '25px',
    height: '25px',
    background: `url('/images/icon-cart.svg') no-repeat center / 20px 20px`,
  },
})

export default AddToCart
