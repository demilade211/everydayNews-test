import React from 'react'
import HeadTags from './layout/HeadTags'
import NavBar from './layout/NavBar'


const Layout = ({children}) => {
  return (
    <>
        <HeadTags/>
        <NavBar/>
        <main>
            {children}
        </main>
    </>
  )
}

export default Layout