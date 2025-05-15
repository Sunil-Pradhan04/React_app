// All_data.jsx
import React, { createContext, useEffect, useState } from "react";

export const YourContext = createContext({
    data : [],
    setData : () => {},
    product2 : [],
    wishList : [],
    setWishlist : () => {},
    cart : [],
    setCart : () => {},
});
const product1 = [
        {
            type : "men",
            id : '1',
            name : 'T-shart',
            detels : 'Best - for men , frixible , Good Quality',
            price : '499',
            photo : 'T-shart.jpeg',
            rating : '2.5',
        },
        {
            id : '2',
            name : 'Casual pant',
            detels : 'for men , frixible , Good Quality - size : 18 . 40',
            price : '349',
            photo : 'Casual-pant.jpg',
            rating : '1.4',
        },
        {
            id : '3',
            name : 'Pant',
            detels : 'Optimised - Reuseable , Best quality , ',
            price : '799',
            photo : 'Pant.avif',
            rating : '3.7',
        },
        {
            id : '4',
            name : 'Shart',
            detels : 'Only for MEN - Good Quality , 90% off',
            price : '999',
            photo : 'shart.webp',
            rating : '3.5',
        },
        {
            id : '5',
            name : 'Sportswear',
            detels : 'For Spots man , frixible - tik tak tok',
            price : '1099',
            photo : 'sports.jpeg',
            rating : '4',
        },
        {
            id : '6',
            name : 'Innerwear',
            detels : 'For short use Only',
            price : '259',
            photo : 'inner.webp',
            rating : '4.6',
        },
        {
            id : '7',
            name : 'Watch',
            detels : 'Formal Watch - Official Use , Best Seller',
            price : '7999',
            photo : 'Watch.jpg',
            rating : '3.9',
        },
    ]
const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [product2 , setProduct] = useState(product1)
  const [wishList , setWishlist] = useState([])
  const [cart , setCart] = useState([])
  // useEffect(() => {
  //     fetch('http://localhost:3000/Product')
  //     .then((obj) => obj.json()
  //   .then((result) => setProduct(result)))
  // },[])
  // useEffect(() => {
  //   fetch('http://localhost:3000/wishlistId')
  //   .then((obj2) => obj2.json()
  // .then((result2) => setWishlist(result2)))
  // },[])
  // let option = {
  //   method : "POST",
  //   wishlistId: JSON.parse(
  //     1
  //   )
  // }
  // useEffect(() => {
  //   fetch('http://localhost:3000/wishlistId' , option)
  //   .then((responce) => responce.json())
  //   .then((json) => console.log(json))
  // },[])
  return (
    <YourContext.Provider value={{ data, setData , product2 , wishList , setWishlist , cart , setCart }}>
      {children}
    </YourContext.Provider>
  );
};

export default DataProvider;