import React from 'react'
import Typed from 'react-typed';


const Header = () => {
  return (
    <>
    <div className="header-wrapper">
        
        <div className="main-info">
            <h1>Web</h1>
            <Typed 
             className="typed-text"
             strings={["Welcome", "This web", "was Created for", "Education!!!"]}
             typeSpeed={40}
             backSpeed={60}
             loop
             />
             <a href="#" className="btn-main-offer">contact</a>
        </div>
    </div>
             </>
  )
}

export default Header