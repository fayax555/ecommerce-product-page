import { useState, useEffect, Dispatch, SetStateAction, useRef } from 'react'
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
    const handleClickOutside = (e: any) => {
      if (isModalOpen) {
        if (e.target.classList.contains('c-ioGMRi')) {
          console.log(e.target)
          setIsModalOpen(false)
        }
      }
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

ImageSlider.defaultProps = {
  isModal: false,
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

export default ImageSlider
