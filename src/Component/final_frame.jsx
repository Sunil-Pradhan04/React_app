import React, { useContext } from "react";
import './style/Final.css'
import { useLocation } from "react-router-dom";
import { YourContext } from "./Store/All_data";

const Frame = () => {
   const {data} = useContext(YourContext);
   console.log(data)
    return(
        <>
        <div className="frame">
            <h1>Hello</h1>
            <div className="img"style={{ backgroundImage: `url("${data.photo}")` }}></div>
            </div>
        </>
    )
}
export default Frame;