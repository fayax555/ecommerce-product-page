import { styled } from 'stitches.config'

interface Props {}

const ProductDetails = () => {
  return (
    <Wrapper>
      <p>Sneaker Company</p>
      <Title>Fall Limited Edition Sneakers</Title>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <PriceWrapper>
        <p>$125.00</p>
        <p>50%</p>
        <del>$250.00</del>
      </PriceWrapper>
    </Wrapper>
  )
}

const Wrapper = styled('section', {})

const Title = styled('h1', {
  fontSize: '1.4rem',
  paddingBottom: '10px',
})

const PriceWrapper = styled('div', {
  display: 'flex',
  gap: '10px',
  padding: '10px',
  '& > del': {
    color: '#ccc',
    marginLeft: 'auto',
  },
})

export default ProductDetails
