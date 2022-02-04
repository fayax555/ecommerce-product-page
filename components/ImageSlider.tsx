import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react'
import { styled } from 'stitches.config'
import Image from 'next/image'
import { useMeasure } from 'react-use'
import { PrevButton, NextButton, CloseIcon } from './SliderButtons'

interface Props {
  isModalOpen?: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  isModal: boolean
}

const ImageSlider = ({ isModal, isModalOpen, setIsModalOpen }: Props) => {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)

  const handleLeft = () => {
    if (count > 0) setCount((c) => c - 1)
  }

  const handleRight = () => {
    if (count < 3) setCount((c) => c + 1)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) {
        if (e.key === 'ArrowLeft') handleLeft()
        if (e.key === 'ArrowRight') handleRight()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, count, setIsModalOpen])

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if ((e.target as Element).classList.contains('modal-overlay'))
        setIsModalOpen(false)
    }

    window.addEventListener('mousedown', handleClickOutside)

    return () => window.removeEventListener('mousedown', handleClickOutside)
  }, [isModalOpen, setIsModalOpen])

  return (
    <Wrapper ref={wrapperRef}>
      {/* for desktop modal slider navigation */}
      {isModal && (
        <>
          <CloseIcon {...{ setIsModalOpen }} />
          <PrevButton {...{ isModal, handleLeft }} />
          <NextButton {...{ isModal, handleRight }} />
        </>
      )}
      <SlideBoxWrapper className={isModal ? 'modal' : ''} ref={ref}>
        <SlideBox
          css={{
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
        {/* for mobile navigation */}
        {!isModal && (
          <>
            <PrevButton {...{ isModal, handleLeft }} />
            <NextButton {...{ isModal, handleRight }} />
          </>
        )}
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
              css={{ opacity: !isModal && count === i ? '0.65' : '1' }}
              className={count === i ? 'active' : ''}
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

ImageSlider.defaultProps = {
  isModal: false,
}

const Wrapper = styled('div', {
  '@bp1': {
    width: '445px',
  },
})

const SlideBoxWrapper = styled('div', {
  overflow: 'hidden',
  margin: '0 auto',
  position: 'relative',

  '@bp1': {
    borderRadius: '15px',
    cursor: 'pointer',
    height: '445px',
    margin: 'revert',
  },

  '&.modal': {
    cursor: 'revert',
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

const ThumbnailListWrapper = styled('div', {
  display: 'none',

  '@bp1': {
    display: 'flex',
    gap: '5px',
    justifyContent: 'space-between',
    paddingTop: '32px',
  },
})

const ThumbnailWrapper = styled('div', {
  position: 'relative',
  width: '88px',
  height: '88px',
  cursor: 'pointer',
  borderRadius: '11px',

  '& img': {
    display: 'block',
    borderRadius: '10px',
    borderImageWidth: '25px solid #444',
  },

  '&:hover': {
    '&::before': {
      content: '""',
      position: 'absolute',
      background: 'rgba(255, 255, 255, 0.4)',
      width: '100%',
      height: '100%',
      zIndex: '5',
      borderRadius: '10px',
    },
  },

  '&.active': {
    outline: '$orange 3px solid',

    '&::before': {
      content: '""',
      position: 'absolute',
      background: 'rgba(255, 255, 255, 0.65)',
      width: '100%',
      height: '100%',
      zIndex: '1',
      borderRadius: '10px',
    },
  },
})

export default ImageSlider
