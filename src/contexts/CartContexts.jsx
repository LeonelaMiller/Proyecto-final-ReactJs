import { createContext, useState } from "react";
export const CartContexts= createContext();
export const CartProvider = ({children}) => {
    const [items,setItems] = useState ([])

    const clear = () => setItems([])

    const onAdd = (item) => setItems((prev) => {
        return [...prev, item]
    })

    return (
    <CartContexts.Provider value={{items, clear, onAdd}}>
        {children}
        </CartContexts.Provider>
    )
}
   