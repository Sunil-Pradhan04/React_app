import React from "react";
import './style/header.css'
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";


const Header = () => {
    const menu = ['MEN' , 'WOMEN' , 'HOME' , 'KIDS' , 'BEAUT'];
    return(
        <>
        <header className="header">
        <div className="logo"></div>
        <div className="menu">
            <Link className="nav_link" to="/Men"><div className="item">MEN</div></Link> 
            <Link className="nav_link" to="/Women"><div className="item">WOMEN</div></Link>
            <Link className="nav_link" to="/Home"><div className="item">HOME</div></Link>
            <Link className="nav_link" to="/Kids"><div className="item">KIDS</div></Link> 
            <Link className="nav_link" to="/Beaut"><div className="item">BEAUT</div></Link> 

        </div>
        <input type="search" placeholder="Search for pooudes,brand and more..." className="search"></input>
        <Link className="nav_link" to="#"><div className="main">
            <CgProfile className="icon" />
            <p className="text">Profile</p>
        </div></Link> 
        <Link className="nav_link" to="/WishList"><div className="main">
            <FaRegHeart className="icon" />
            <p className="text">Wishlist</p>

        </div></Link>
        <Link className="nav_link" to="/cart"><div className="main">
            <MdOutlineShoppingBag className="icon" />
            <p className="text">Bag</p>

        </div></Link> 

        </header>

        </>
    )
}
export default Header;