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
})

export const useCartContext = () => useContext(CartContext)

const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cartQty, setCartQty] = useState(0)

  return (
    <CartContext.Provider value={{ cartQty, setCartQty }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
