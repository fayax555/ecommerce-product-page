import {
  createContext,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

const CartContext = createContext({
  cartQty: 0,
  setCartQty: (_cart: SetStateAction<number>) => {},
  isCartOpen: false,
  setIsCartOpen: (_isCartOpen: SetStateAction<boolean>) => {},
})

export const useCartContext = () => useContext(CartContext)

const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartQty, setCartQty] = useState(0)

  return (
    <CartContext.Provider
      value={{ cartQty, setCartQty, isCartOpen, setIsCartOpen }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
