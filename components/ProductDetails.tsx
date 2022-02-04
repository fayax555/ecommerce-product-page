import { styled } from 'stitches.config'

const ProductDetails = () => (
  <Wrapper>
    <BrandName>SNEAKER COMPANY</BrandName>
    <Title>Fall Limited Edition Sneakers</Title>
    <Text>
      These low-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they’ll withstand everything the
      weather can offer.
    </Text>
    <PriceWrapper>
      <p>$125.00</p>
      <p>50%</p>
      <del>$250.00</del>
    </PriceWrapper>
  </Wrapper>
)

const Wrapper = styled('section', {
  padding: '24px',
  paddingBottom: '0',

  '@bp1': {
    padding: '0',
  },
})

const Title = styled('h1', {
  paddingBottom: '10px',
  fontSize: '1.75rem',

  '@bp1': {
    fontSize: '2.75rem',
    lineHeight: '1.1',
  },
})

const BrandName = styled('p', {
  color: '$orange',
  fontSize: '0.75rem',
  paddingBottom: '10px',
  fontWeight: '$bold',
  letterSpacing: '0.14em',

  '@bp1': {
    transform: 'translateY(-10px)',
    letterSpacing: '0.2em',
  },
})

const Text = styled('p', {
  color: '$darkGrayishBlue',
  padding: '5px 0',
  lineHeight: '1.6',

  '@bp1': {
    fontSize: '1rem',
    marginTop: '20px',
  },
})

const PriceWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  padding: '22px 0',

  '& > p:nth-child(1)': {
    color: '$veryDarkBlue',
    fontSize: '1.75rem',
    fontWeight: '$bold',
    letterSpacing: '0.04em',
    borderRadius: '5px',
  },

  '& > p:nth-child(2)': {
    color: '$orange',
    backgroundColor: '$paleOrange',
    padding: '2px 8px',
    borderRadius: '5px',
    fontSize: '0.8rem',
    fontWeight: '$bold',

    '@bp1': {
      fontSize: '1rem',
      marginLeft: '-5px',
    },
  },

  '& > del': {
    color: '$grayishBlue',
    marginLeft: 'auto',

    '@bp1': {
      marginLeft: 'revert',
      transform: 'translateY(-10px)',
    },
  },

  '@bp1': {
    width: '220px',
    flexWrap: 'wrap',
  },
})

export default ProductDetails
