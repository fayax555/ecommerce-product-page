import { useState } from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import ProductDetails from 'components/ProductDetails'
import AddToCart from 'components/AddToCart'
import { styled } from 'stitches.config'
import ImageSlider from 'components/ImageSlider'
import ClientOnlyPortal from 'utils/ClientOnlyPortal'

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (isModalOpen) {
    document.body.style.overflowY = 'hidden'
  }

  return (
    <>
      <Head>
        <title>Frontend Mentor | E-commerce product page</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main>
        {isModalOpen && (
          <ClientOnlyPortal selector='#modal'>
            <Modal>
              <div>
                <ImageSlider />
              </div>
            </Modal>
          </ClientOnlyPortal>
        )}
        <ImageSlider {...{ isModalOpen, setIsModalOpen }} />
        <div>
          <ProductDetails />
          <AddToCart />
        </div>
      </Main>
    </>
  )
}

const Modal = styled('div', {
  backgroundColor: 'rgba(26, 3, 3, 0.5)',
  position: 'fixed',
  inset: '0 0 0 0',
  overflowY: 'auto',

  '& > div': {
    position: 'absolute',
    width: '500px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
})

const Main = styled('main', {
  maxWidth: '800px',
  margin: 'auto',

  '@bp1': {
    maxWidth: '1264px',
    display: 'grid',
    gridTemplateColumns: 'minmax(450px, 506px) minmax(auto, 506px)',
    justifyContent: 'space-between',
    padding: '56px',
  },
})

export default Home
