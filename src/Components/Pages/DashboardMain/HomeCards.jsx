import React from 'react';
// import -> icons
import {AiOutlineArrowDown,AiOutlineArrowUp} from "react-icons/ai";
export default function HomeCards({cardsData}) {
    let price = cardsData.price.replace(",","");
    return (
        <>
            <div>
                <div>
                    <h3>{cardsData.heading}</h3>
                    <h2>${cardsData.price}<span> {cardsData.priceRate} 
                    {price <= 2500 ? <AiOutlineArrowDown className="AiOutlineArrowDown"/> :<AiOutlineArrowUp className="AiOutlineArrowUp"/>}</span></h2>
                    <p>{cardsData.text}</p>
                </div>
            </div>
        </>
    )
}