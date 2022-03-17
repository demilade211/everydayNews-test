import React from 'react'
import {header_con} from "../../styles/navbar.module.css"
import Image from 'next/image'

const NavBar = () => {
  return (
    <header className={header_con}>
        <Image src="/images/logo.svg" alt="logo" width={40} height={40}/><span style={{fontWeight:"bold",marginLeft:"10px",color:"white"}}>Everyday News</span>
    </header>
  )
}

export default NavBar