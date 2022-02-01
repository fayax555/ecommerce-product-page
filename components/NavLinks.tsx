import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { styled } from 'stitches.config'

interface NavProps {
  isMenuOpen: boolean
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

const NavLinks = ({ isMenuOpen, setIsMenuOpen }: NavProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (!wrapperRef.current?.contains(e.target)) setIsMenuOpen(false)
    }

    window.addEventListener('mousedown', handleClickOutside)
    return () => window.removeEventListener('mousedown', handleClickOutside)
  }, [setIsMenuOpen])

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
        <LinkWrapper>
          <Link>Collections</Link>
          <Link>Men</Link>
          <Link>Women</Link>
          <Link>About</Link>
          <Link>Contact</Link>
        </LinkWrapper>
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

const LinkWrapper = styled('div', {
  display: 'grid',
  gap: '1.5rem',
  fontWeight: '$bold',
})

const Link = styled('a', {
  padding: '0 10px',
  cursor: 'pointer',
  fontSize: '1.125rem',
})

export default NavLinks
