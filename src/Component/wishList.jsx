import React, { useContext } from "react";
import './style/WishList.css'
import { YourContext } from "./Store/All_data";
import Item from "./item";
import Unavalable from "./unavlable";

const WishList = () => {
    const {wishList , product} = useContext(YourContext)
    return(
        <div className="Wishlist">
        {
            wishList.length === 0 ? <Unavalable /> :
            product.map((item) => wishList.includes(item.id) ? <Item key={item.id} item={item} />: null)
        }
        </div>
    )
}
export default WishList;