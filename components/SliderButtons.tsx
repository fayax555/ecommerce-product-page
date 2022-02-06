import { Dispatch, SetStateAction } from 'react'
import { styled } from 'stitches.config'

interface PrevProps {
  isModal: boolean
  handleLeft: () => void
}

export const PrevButton = ({ isModal, handleLeft }: PrevProps) => (
  <Prev className={isModal ? 'modal' : ''} onClick={() => handleLeft()}>
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
)

interface NextProps {
  isModal: boolean
  handleRight: () => void
}

export const NextButton = ({ isModal, handleRight }: NextProps) => (
  <Next className={isModal ? 'modal' : ''} onClick={() => handleRight()}>
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
)

interface CloseIconProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

export const CloseIcon = ({ setIsModalOpen }: CloseIconProps) => (
  <CloseSvg
    onClick={() => setIsModalOpen(false)}
    width='14'
    height='15'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
      fill='currentColor'
      fillRule='evenodd'
    />
  </CloseSvg>
)

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

  '&.modal': {
    display: 'grid',
    top: '290px',
    zIndex: 5,
    transform: 'scale(1.1)',
  },
})

const Prev = styled(Button, {
  top: '40%',
  left: '10px',

  '&.modal': {
    left: '-50px',
  },
})

const Next = styled(Button, {
  top: '40%',
  right: '10px',

  '&.modal': {
    right: '-50px',
  },
})

const CloseSvg = styled('svg', {
  transform: 'scale(1.5) translate(340px, 5px)',
  cursor: 'pointer',
  color: '$white',
  transition: '0.15s ease',

  '&:hover': {
    color: '$orange',
  },
})
