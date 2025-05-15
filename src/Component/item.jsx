import React, { useContext, useState } from "react";
import './style/item.css'
import { CiHeart } from "react-icons/ci";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BsCartPlusFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { YourContext } from "./Store/All_data";

const Item = ({item}) => {
    // const [cart , setCart] = useState(false)
    const {setData} = useContext(YourContext)
    const onClickHandel = () => {
        setData(item);
    }
    const {setWishlist , wishList , cart , setCart} = useContext(YourContext)
    const found = wishList.includes(item.id);
    const wishListhandel = () => {
        if(found){
            const newWIshlist = wishList.filter((index) => index !== item.id);
            setWishlist(newWIshlist)
        }
        else{
            setWishlist([...wishList , item.id])
        }
    }
    const found1 = cart.includes(item.id)
    const cartHandel = () => {
          if(found1){
            const newCart = cart.filter((index) => index !== item.id);
            setCart(newCart)
        }
        else{
            setCart([...cart , item.id])
        }
    }
    return(
        <>
        {/* <p>Your Item Is : {item}</p> */}
<div className="box" onClick={onClickHandel}>
<Link to="/Frame" style={{color : "black" , textDecoration : 'none'}}><div className="image" style={{backgroundImage : `URL(${item.photo})`}}>
                <div className="rating">{item.rating}<FaStar style={{color : "rgb(71, 250, 71)" , marginLeft : "5px"}} />
                </div>
            </div></Link>
            <Link to="/Frame" style={{color : "black" , textDecoration : 'none'}}><div className="name">{item.name}</div></Link>
            <Link to="/Frame" style={{color : "black" , textDecoration : 'none'}}><div className="detels">{item.detels}</div></Link>
            <Link to="/Frame" style={{color : "black" , textDecoration : 'none'}}><div className="price">Rs .{item.price} </div></Link>
            <div style={{display : "flex" , justifyContent : "space-between" , paddingLeft : "20px" , paddingRight : "20px" , height : '30px' , marginTop: '10px'}}>
                <div className="wishlist" onClick={() => { wishListhandel();}}>{wishList.includes(item.id) ? <GoHeartFill className="heart"/> :<GoHeart style={{fontSize : '20px'}}/>  }
                </div>
                <div className="addcart" onClick={() => cartHandel() }>{!cart.includes(item.id) ? <BsCartPlusFill style={{fontSize : "20px" , marginRight : "5px"}}/>
 : <BsFillCartCheckFill style={{fontSize : "20px" , marginRight : "5px"}}/>
            }Add
                </div>
            </div>
        </div>
        </>
    )
}
export default Item;