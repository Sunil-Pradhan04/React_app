import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";



const Api = () => {
    let [data , setData] = useState([])
    const GET_API =  useEffect(() => {
        fetch('http://localhost:3000/users').then((obj) => {
            obj.json().then((reasult) => {
                setData(reasult)
            })
        })
    },[]);
    console.log(data)
    return(
        <>
        <p>Api Call</p>
       {data.map((item) => <p key={item.id}>{item.name}</p> )}
       {data.map((item) => <img src={item.photo}></img> )}
        </>
    )
}
export default Api;