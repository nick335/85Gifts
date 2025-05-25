import { create } from 'zustand'

interface CartItem {
  _id: string
  name: string
  description: string
  price: number
  quantity: number
  image: string
}

interface CartState {
  cartItems: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (_id: string) => void
  incrementQuantity: (_id: string) => void
  decrementQuantity: (_id: string) => void
  clearCart: () => void
}

const getStoredCart = (): CartItem[] => {
  try {
    const stored = localStorage.getItem('cart')
    return stored ? JSON.parse(stored) : []
  }catch{
    return []
  }
}

const saveCart = (cartItems: CartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(cartItems))
}


export const useCart = create<CartState>((set, get) => ({
  cartItems: getStoredCart(),

  addToCart: (item) => {
    const { cartItems } = get()
    const existingItem = cartItems.find((i) => i._id === item._id)

    const updatedCart = existingItem 
    ? cartItems.map((i) => i._id === item._id ? {...i, quantity: i.quantity + 1 } : i ) 
    : [...cartItems, {...item, quantity: 1}]

    saveCart(updatedCart)
    set({ cartItems: updatedCart })
  },

  removeFromCart: (_id) => {
    const updatedCart = get().cartItems.filter((item) => item._id !== _id)
    saveCart(updatedCart)
    set({cartItems: updatedCart})
  },

  clearCart: () => {
    saveCart([])                // Clear from localStorage
    set({ cartItems: [] })      // Reset state
  },

  // removeFromCart: (_id) =>
  //   set((state) => ({
  //     cartItems: state.cartItems.filter((item) => item._id !== _id),
  //   })),

  incrementQuantity: (_id) => {
    const updatedCart = get().cartItems.map((item) =>
      item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
    )
    saveCart(updatedCart)
    set({ cartItems: updatedCart })
  },

  // incrementQuantity: (_id) =>
  //   set((state) => ({
  //     cartItems: state.cartItems.map((item) =>
  //       item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
  //     ),
  //   })),

  decrementQuantity: (_id) => {
    const updatedCart = get().cartItems.map((item) =>
      item._id === _id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    saveCart(updatedCart)
    set({ cartItems: updatedCart })
  },

  // decrementQuantity: (_id) =>
  //   set((state) => {
  //     const item = state.cartItems.find((i) => i._id === _id)
  //     if (item?.quantity === 1) {
  //       return {
  //         cartItems: state.cartItems.filter((i) => i._id !== _id),
  //       }
  //     }
  //     return {
  //       cartItems: state.cartItems.map((i) =>
  //         i._id === _id ? { ...i, quantity: i.quantity - 1 } : i
  //       ),
  //     }
  //   }),
}))
