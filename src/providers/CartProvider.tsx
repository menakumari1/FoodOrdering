import { Children, createContext, useContext } from "react";

const CartContext=createContext({});

const CartProvider=(children)=>{
    <CartContext.Provider value={{items:[], onAddItem: ()=> {}}}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;

export const useCart =()=> useContext(CartContext);