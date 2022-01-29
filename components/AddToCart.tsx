import { styled } from '@stitches/react'

const AddToCart = () => {
  return (
    <div>
      <div>
        <button>-</button> <span>0</span> <button>+</button>
      </div>
      <AddToCartButton>Add to cart</AddToCartButton>
    </div>
  )
}

const AddToCartButton = styled('button', {
  padding: '15px',
  position: 'relative',
  width: '100%',
  cursor: 'pointer',

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
