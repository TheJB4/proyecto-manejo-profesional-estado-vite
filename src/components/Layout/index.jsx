//import React from 'react'
import Footer from "../Footer"
import Header from "../Header"

import './Layout.css'

const Layout = ({children}) => {
    return (
        <div className="Main">
            <Header/>
                {children}
                {/* {<Outlet/>} */}
            <Footer/>
        </div>
      )
}

Layout.propTypes = {
    children : Node.any
}

export default Layout