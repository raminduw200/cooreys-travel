import React, { useState } from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const NavBar = () => {
    const [active, setActive] = useState('navBar')
    // function to toggle the navbar
    const showNav = () => {
        setActive('navBar activeNavbar')
    }
    
    // function to close the navbar
    const removeNavbar = () => {
        setActive('navBar')
    }

    return (
        <section className='navBarSection'>
            <header className='header flex'>

                <div className='logoDiv'>
                    <a href='/' className='logo flex'>
                        <h1><MdOutlineTravelExplore className="icon"/> Travel.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className='navLists grid'>
                        <li className='navItem'>
                            <a href='/' className='navLink'>Home</a>
                        </li>
                        <li className='navItem'>
                            <a href='/' className='navLink'>Packages</a>
                        </li>
                        <li className='navItem'>
                            <a href='/' className='navLink'>About</a>
                        </li>
                        <li className='navItem'>
                            <a href='/' className='navLink'>Pages</a>
                        </li>
                        <li className='navItem'>
                            <a href='/' className='navLink'>Contact</a>
                        </li>

                        <button className='btn'>
                            <a href="/">BOOK NOW</a>
                        </button>
                    </ul>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>


                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>
            </header> 
        </section>
    )
}

export default NavBar