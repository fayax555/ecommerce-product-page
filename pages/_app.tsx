import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from 'components/Header'
import CartProvider from 'contexts/CartContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Header />
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
