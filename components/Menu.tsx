import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { styled } from 'stitches.config'
import NavLinks from './NavLinks'

interface MenuProps {
  isMenuOpen: boolean
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

const Menu = ({ isMenuOpen, setIsMenuOpen }: MenuProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [shouldOpen, setShouldOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (!wrapperRef.current?.contains(e.target)) setIsMenuOpen(false)
    }

    const handleResize = () => setShouldOpen(window.innerWidth < 800)

    window.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('resize', handleResize)
    }
  }, [setIsMenuOpen])

  if (!shouldOpen) return null

  return (
    <Overlay
      css={
        isMenuOpen
          ? {
              transform: 'translateX(0px)',
              right: '0',
              width: 'revert',
            }
          : undefined
      }
    >
      <Wrapper ref={wrapperRef}>
        <NavLinks />
      </Wrapper>
    </Overlay>
  )
}

const Overlay = styled('div', {
  position: 'absolute',
  inset: '0 auto 0 0',
  backgroundColor: 'hsla(0, 0%, 0%, 0.75)',
  padding: '0 1rem',
  transition: '0.1s ease-in-out',
  zIndex: '1',
  transform: 'translateX(-290px)',
  display: 'grid',

  '@bp1': {
    display: 'none',
  },
})

const Wrapper = styled('div', {
  position: 'absolute',
  left: '0',
  height: '100%',
  backgroundColor: '#fff',
  paddingTop: '90px',
  paddingLeft: '15px',
  width: '250px',
})

export default Menu
