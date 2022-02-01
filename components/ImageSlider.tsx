import { useState, useEffect } from 'react'
import { styled } from '@stitches/react'
import Image from 'next/image'
import { useMeasure } from 'react-use'

const ImageSlider = () => {
  const [count, setCount] = useState(0)
  const [ref, { width, height }] = useMeasure<HTMLDivElement>()

  const handleLeft = () => {
    if (count > 0) {
      setCount((curr) => curr - 1)
    }
  }

  const handleRight = () => {
    if (count < 3) {
      setCount(count + 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handleLeft()
      if (e.key === 'ArrowRight') handleRight()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, count])

  return (
    <Wrapper>
      <SlideBoxWrapper ref={ref}>
        <SlideBox
          style={{
            transform: `translateX(${count * -width}px)`,
            width: `${width * 4}px`,
            left: 0,
          }}
        >
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <ImageWrapper key={i}>
                <Image
                  width={width}
                  height={height}
                  src={`/images/image-product-${i + 1}.jpg`}
                  alt=''
                  priority={true}
                  loading='eager'
                />
              </ImageWrapper>
            ))}
        </SlideBox>
        <Prev onClick={() => handleLeft()}>
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
        <Next onClick={() => handleRight()}>
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

const Wrapper = styled('div', {})

const SlideBoxWrapper = styled('div', {
  overflow: 'hidden',
  margin: '0 auto',
  position: 'relative',
})

const SlideBox = styled('div', {
  height: 'clamp(300px, 60vw, 500px)',
  display: 'flex',
  transition: '0.3s ease',
})

const ImageWrapper = styled('div', {
  position: 'relative',
})

const Button = styled('button', {
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
  top: '40%',
  left: '10px',
})

const Next = styled(Button, {
  top: '40%',
  right: '10px',
})

export default ImageSlider
