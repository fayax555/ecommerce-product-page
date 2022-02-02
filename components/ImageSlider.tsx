import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { styled } from 'stitches.config'
import Image from 'next/image'
import { useMeasure } from 'react-use'

interface Props {
  isModalOpen?: boolean
  setIsModalOpen?: Dispatch<SetStateAction<boolean>>
}

const ImageSlider = ({ isModalOpen, setIsModalOpen }: Props) => {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>()
  const [count, setCount] = useState(0)

  const handleLeft = () => {
    if (count > 0) setCount((c) => c - 1)
  }

  const handleRight = () => {
    if (count < 3) setCount((c) => c + 1)
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
              <ImageWrapper
                key={i}
                onClick={() =>
                  !isModalOpen && setIsModalOpen && setIsModalOpen(true)
                }
              >
                <Image
                  width={width}
                  height={height}
                  src={`/images/image-product-${i + 1}.jpg`}
                  alt={`image-product-${i + 1}`}
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
      <ThumbnailListWrapper>
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <ThumbnailWrapper
              key={i}
              onClick={() => {
                setCount(i)
              }}
              css={{
                outline: count === i ? '$orange 3px solid' : 'none',
              }}
            >
              <Image
                layout='fill'
                objectFit='initial'
                src={`/images/image-product-${i + 1}-thumbnail.jpg`}
                alt={`image-product-${i + 1}-thumbnail`}
              />
            </ThumbnailWrapper>
          ))}
      </ThumbnailListWrapper>
    </Wrapper>
  )
}

const Wrapper = styled('div', {})

const ThumbnailListWrapper = styled('div', {
  display: 'none',

  '@bp1': {
    display: 'flex',
    gap: '5px',
    justifyContent: 'space-between',
    paddingTop: '10px',
  },
})

const ThumbnailWrapper = styled('div', {
  position: 'relative',
  width: '100px',
  height: '100px',
  cursor: 'pointer',
  borderRadius: '11px',

  '& img': {
    display: 'block',
    borderRadius: '10px',
    borderImageWidth: '25px solid #444',
  },
})

const SlideBoxWrapper = styled('div', {
  overflow: 'hidden',
  margin: '0 auto',
  position: 'relative',

  '@bp1': {
    borderRadius: '10px',
    cursor: 'pointer',
  },
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

  '@bp1': {
    display: 'none',
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
