import React, { useContext } from "react";
import './style/MEN.css'
import Item from "./item";
import { YourContext } from "./Store/All_data";

const Men = () => {
    
    const {product2} = useContext(YourContext)
    return(
        <>
        <div className="MEN">
       {product2.map((each) =><Item key={each.id} item={each} />)}
        </div>
        </>
    )
}
export default Men;