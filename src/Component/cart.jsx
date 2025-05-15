import React, { useContext } from "react";
import Unavalable from "./unavlable";
import './style/cart.css'
import { YourContext } from "./Store/All_data";
import Item from "./item";
const Cart = () => {
    const {cart , product} = useContext(YourContext)
    return(
        <>
        <div className="cart">
            {/* <Unavalable /> */}
            { cart.length === 0 ? <Unavalable /> : 
                product.map((item) => cart.includes(item.id) ? <Item key={item.id} item={item} /> : null)
            }
        </div>
        </>
    )
}
export default Cart;