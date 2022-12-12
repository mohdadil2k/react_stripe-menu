import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
import logo from "./images/logo.svg";

const Navbar = () => {
  const { openSidebar,openSubmenu,closeSubmenu } = useGlobalContext();

  const displaySubmenu=(e)=>{
    const targetText = e.target.textContent;
    const positioningSubmenu = e.target.getBoundingClientRect()
    const center = (positioningSubmenu.left + positioningSubmenu.right)/2;
    const bottom = positioningSubmenu.bottom;   
    openSubmenu(targetText,{center,bottom})
  }
  const handleMouseOver=(e)=>{
    if(!e.target.classList.contains('nav-btn')){
      closeSubmenu()
    }
  }
  return (
    <nav className="nav" >
      <div className="nav-wrapper" onMouseOver={handleMouseOver}>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo" />
            <button onClick={openSidebar} className="fa-bars">
              <FaBars />
            </button>
          </div>
        </div>
        <ul className="nav-links">
          <li>
            <button onMouseOver={displaySubmenu} className='nav-btn'>products</button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className='nav-btn'>developers</button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className='nav-btn'>company</button>
          </li>
        </ul>
        <button className="signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
