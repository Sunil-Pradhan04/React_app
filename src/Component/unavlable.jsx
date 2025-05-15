// import { FlatESLint } from "eslint/use-at-your-own-risk";
import React from "react";
 import { CgUnavailable } from "react-icons/cg";
 import { FcHighPriority } from "react-icons/fc";
const Unavalable = () => {
    return(
        <>
        <div className="unavalable" style={{display : "flex" , flexDirection : "column" , justifyContent : "center" , width : "100%"}}>
          <center> <CgUnavailable style={{fontSize : '20vh'}} /></center>

            <center><h1>No item avalable</h1></center>
            <center><FcHighPriority style={{fontSize : "10vh"}} />
</center>
        </div>
        </>
    )
}
export default Unavalable;