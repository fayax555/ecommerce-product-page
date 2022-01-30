import { useState, useEffect } from 'react'
import { styled, keyframes } from '@stitches/react'
import Image from 'next/image'

const ImageSlider = () => {
  const [move, setMove] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')
        setMove((move) => (move <= -300 ? move + 300 : move))
      if (e.key === 'ArrowRight')
        setMove((move) => (move >= -600 ? move - 300 : move))
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <Wrapper>
      <SlideBoxWrapper>
        <SlideBox style={{ transform: `translateX(${move}px)` }}>
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <ImageWrapper key={i}>
                <Image
                  width={300}
                  height={300}
                  src={`/images/image-product-${i + 1}.jpg`}
                  alt=''
                  priority={true}
                />
              </ImageWrapper>
            ))}
        </SlideBox>
        <Prev onClick={() => move <= -300 && setMove(move + 300)}>
          <svg width='12' height='18' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M11 1 3 9l8 8'
              stroke='currentColor'
              strokeWidth='3'
              fill='none'
              fillRule='evenodd'
            />
          </svg>
        </Prev>
        <Next onClick={() => move >= -600 && setMove(move - 300)}>
          <svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='m2 1 8 8-8 8'
              stroke='currentColor'
              strokeWidth='3'
              fill='none'
              fillRule='evenodd'
            />
          </svg>
        </Next>
      </SlideBoxWrapper>
    </Wrapper>
  )
}

const Wrapper = styled('div', {
  minHeight: '320px',
  width: '502px',
  margin: '0 auto',
  border: '1px solid #000',

  '& > section': {
    marginTop: '1rem',
    textAlign: 'center',
  },
})

const SlideBoxWrapper = styled('div', {
  border: '2px solid #421515',
  overflow: 'hidden',
  width: '302px',
  margin: '0 auto',
  position: 'relative',
})

const SlideBox = styled('div', {
  height: '300px',
  width: '1220px',
  display: 'flex',
  transition: '0.3s ease',
})

const ImageWrapper = styled('div', {
  width: '300px',
})

const Button = styled('button', {
  // textAlign: 'center',
  transform: 'scale(0.8)',
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50px',
  height: '50px',
  border: 'none',
  borderRadius: '100%',
  position: 'absolute',
  top: '50%',
  padding: '0.5rem 1rem',
  cursor: 'pointer',
  color: '#1D2026',

  '&:hover': {
    '& > svg': {
      color: 'orange',
    },
  },
})

const Prev = styled(Button, {
  left: '0',
})

const Next = styled(Button, {
  right: '0',
})

export default ImageSlider
