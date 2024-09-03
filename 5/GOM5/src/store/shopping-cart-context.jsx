import { createContext } from "react";

const CartContext = createContext({
    items:[],
    addItemToCart: ()=>{},
    updatedItemQuantity: ()=>{},
});

export default CartContext;


















