import React from 'react'
import {
    card,
    cardHeading,
    cardPara,

} from "../styles/card.module.css"
import Image from 'next/image'
import Router from "next/router"

const Card = ({title,id,image}) => {
  return (
    <div onClick={()=>Router.push(`/${id}`)} className={card}>
        <img style={{height:"220px"}} src={image}/>
        <h4 className={cardHeading}>{title}</h4>
        <p className={cardPara}>
            Nulla quis egestas ipsum. 
            Quisque in mattis lacus. 
            Sed fermentum magna vitae ante posuere, 
            sit amet posuere libero egestas.
        </p>
    </div>
  )
}

export default Card